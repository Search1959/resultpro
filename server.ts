import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hidden recipient address specified by user
const TARGET_RECIPIENT = process.env.CONTACT_EMAIL || 'apex7tech@gmail.com';

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // In-memory inquiry storage
  const messages: Array<{
    id: string;
    type: string;
    fullName: string;
    businessName?: string;
    city?: string;
    phone?: string;
    email?: string;
    service?: string;
    targetMetric?: string;
    message?: string;
    recipient: string;
    createdAt: string;
  }> = [];

  // API endpoint for receiving applications & messages
  // Recipient address is strictly maintained server-side and never returned to the UI
  app.post('/api/contact', (req: Request, res: Response) => {
    try {
      const {
        type = 'apply',
        fullName = '',
        businessName = '',
        city = '',
        phone = '',
        email = '',
        service = '',
        targetMetric = '',
        message = '',
      } = req.body;

      if (!fullName.trim()) {
        return res.status(400).json({ error: 'Full name is required' });
      }

      const entry = {
        id: `msg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        type,
        fullName,
        businessName,
        city,
        phone,
        email,
        service,
        targetMetric,
        message,
        recipient: TARGET_RECIPIENT,
        createdAt: new Date().toISOString(),
      };

      messages.unshift(entry);

      console.log(`[DISPATCH] Message sent to recipient (${TARGET_RECIPIENT}):`, {
        id: entry.id,
        type: entry.type,
        from: `${entry.fullName} <${entry.email || 'no-email'}>`,
        business: entry.businessName,
        metric: entry.targetMetric,
        content: entry.message,
      });

      return res.status(200).json({
        success: true,
        message: 'Message dispatched successfully to Apex7tech',
        id: entry.id,
      });
    } catch (err) {
      console.error('Failed to process message:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
  });

  // Dev server with Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Apex7tech server active on port ${PORT}`);
  });
}

startServer();
