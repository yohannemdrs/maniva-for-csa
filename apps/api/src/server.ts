import express from "express"; //escuta requisições HTTP, define rotas, envia respostas, etc
import cors from "cors"; //middleware que controla quem pode accessar a API
import helmet from "helmet"; // middleware que adiciona headers de segurança para proteger a API contra ataques comuns
import cookieParser from "cookie-parser"; // middlware que permite ler cookies da requisição
import "dotenv/config";

const app = express();

app.use(helmet());  
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,   // se permite enviar cookies, necessário para autenticação baseada em cookies
  })
);

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "maniva-api" });
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
