# AI ChatBot# AI ChatBot



A modern, intelligent chatbot application built with TypeScript, Express, and multiple AI providers. Features a clean, professional UI with light/dark theme toggle, markdown support, and real-time responses.A modern, intelligent chatbot application built with TypeScript, Express, and multiple AI providers. Features a clean, professional UI with light/dark theme toggle, markdown support, and real-time responses!



## Features## ✨ Features



- **Multiple AI Providers** - Support for Google Gemini and OpenRouter- **🤖 Multiple AI Providers** - Google Gemini and OpenRouter

- **Conversation Memory** - Maintains context across multiple messages  - **💬 Conversation Memory** - Maintains context across multiple messages  

- **Professional Design** - Clean blue color scheme with responsive layout- **🎨 Professional Design** - Clean blue color scheme with responsive layout

- **Theme Toggle** - Switch between light and dark modes with preference persistence- **🌓 Theme Toggle** - Switch between light and dark modes with preference persistence

- **Markdown Support** - Full markdown rendering with code highlighting- **📝 Markdown Support** - Full markdown rendering with code highlighting

- **Code Highlighting** - Syntax highlighting with copy-to-clipboard functionality- **💻 Code Highlighting** - Syntax highlighting with copy-to-clipboard

- **Real-time Responses** - Fast and intelligent conversation flow- **⚡ Real-time Responses** - Fast and intelligent conversation flow

- **Clean Architecture** - TypeScript with controllers, services, and models separation- **🏗️ Clean Architecture** - TypeScript with controllers, services, and models separation

- **Easy Setup** - Get started in minutes- **🚀 Easy Setup** - Get started in minutes

- **Free to Use** - Works with free tiers of all providers- **💰 Free to Use** - Works with free tiers of all providers



## Tech Stack## 🚀 Tech Stack



- **Backend**: Node.js, Express, TypeScript- **Backend**: Node.js, Express, TypeScript

- **AI Integration**: Google Gemini 2.5 Flash, OpenRouter API- **AI Integration**: 

- **Frontend**: Vanilla JavaScript, HTML5, CSS3, Marked.js, Highlight.js  - **Google Gemini 2.5 Flash** (Recommended - Better free tier!)

- **Testing**: Jest, Supertest  - **OpenRouter API** (Alternative with multiple free models)

- **Build Tools**: TypeScript Compiler, ts-node-dev- **Frontend**: Vanilla JavaScript, HTML5, CSS3, Marked.js, Highlight.js

- **Design**: Professional blue color scheme, enhanced typography

## Prerequisites- **Testing**: Jest, Supertest

- **Build Tools**: TypeScript Compiler, ts-node-dev

- Node.js 16+ installed

- npm or yarn package manager- npm or yarn package manager├── tests                     # Contains unit tests for the application

- Google Gemini API key (recommended) OR OpenRouter API key

- OpenRouter API key (free, no credit card required)│   └── chat.test.ts          # Unit tests for chatbot functionality

## Quick Start

├── package.json              # npm configuration file

### Option 1: Using Google Gemini (Recommended)

## Installation├── tsconfig.json             # TypeScript configuration file

1. **Clone and install dependencies**

   ```bash├── .env.example              # Example of environment variables needed

   git clone <your-repo-url>

   cd chatbot-app1. **Clone the repository**└── README.md                 # Documentation for the project

   npm install

   ```   ```bash```



2. **Get your FREE Gemini API key**   git clone <your-repo-url>

   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)

   - Sign in with your Google account   cd chatbot-app## Setup Instructions

   - Create an API key

   - Copy the key   ```



3. **Configure environment**1. Clone the repository:

   

   Create a `.env` file:2. **Install dependencies**   ```bash

   ```env

   AI_PROVIDER=gemini   ```bash   git clone <repository-url>

   GEMINI_API_KEY=your_api_key_here

   GEMINI_MODEL=gemini-2.5-flash   npm install   cd chatbot-app

   PORT=3000

   ```   ```   ```



4. **Start the server**

   ```bash

   npm run dev3. **Set up environment variables**2. Install dependencies:

   ```

## 📋 Prerequisites

5. **Open your browser**

   - Node.js 16+ installed

   Navigate to `http://localhost:3000` and start chatting!- npm or yarn package manager

- Google Gemini API key (recommended) OR OpenRouter API key

### Option 2: Using OpenRouter

## 🚀 Quick Start

1. **Get OpenRouter API key**

   - Visit [https://openrouter.ai/keys](https://openrouter.ai/keys)### Option 1: Using Google Gemini Pro (Recommended)

   - Sign up for free

   - Create an API key1. **Clone and install dependencies**

   ```bash

2. **Configure environment**   git clone <your-repo-url>

      cd chatbot-app

   Create a `.env` file:   npm install

   ```env   ```

   AI_PROVIDER=openrouter

   OPENROUTER_API_KEY=your_api_key_here2. **Get your FREE Gemini API key**

   OPENROUTER_MODEL=deepseek/deepseek-chat-v3.1:free   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)

   PORT=3000   - Sign in with your Google account (Pro account recommended)

   ```   - Create an API key

   - Copy the key (starts with `AIza...`)

3. **Start the server**

   ```bash3. **Configure environment**

   npm run dev   ```bash

   ```   # Copy .env.example to .env (or create .env)

   # Add these settings:

## Available Scripts   ```

   

- `npm run dev` - Start development server with hot reload   Edit `.env`:

- `npm run build` - Build the TypeScript project   ```env

- `npm start` - Run the production server   AI_PROVIDER=gemini

- `npm test` - Run test suite   GEMINI_API_KEY=your_api_key_here

   GEMINI_MODEL=gemini-2.5-flash

## Project Structure   PORT=3000

   ```

```

chatbot-app/4. **Start the server**

├── src/   ```bash

│   ├── app.ts                    # Express application setup   npm run dev

│   ├── server.ts                 # Server entry point   ```

│   ├── config/

│   │   └── index.ts              # Configuration management5. **Open your browser**

│   ├── controllers/   Navigate to `http://localhost:3000` and start chatting!

│   │   └── chatController.ts     # Request handlers

│   ├── models/📖 **Full Gemini setup guide**: See [GEMINI_SETUP.md](./GEMINI_SETUP.md)

│   │   ├── googleModelClient.ts  # Gemini API client

│   │   └── externalModelClient.ts # OpenRouter API client### Option 2: Using OpenRouter (Alternative)

│   ├── services/

│   │   └── modelService.ts       # Business logic layer1. **Install dependencies** (same as above)

│   ├── types/

│   │   └── index.ts              # TypeScript type definitions2. **Get OpenRouter API key**

│   └── utils/   - Visit [https://openrouter.ai/keys](https://openrouter.ai/keys)

│       └── logger.ts             # Logging utility   - Sign up for free

├── public/   - Create an API key

│   └── index.html                # Chat interface

├── tests/3. **Configure environment**

│   └── chat.test.ts              # API tests   Edit `.env`:

├── .env.example                  # Environment variables template   ```env

├── .gitignore                    # Git ignore rules   AI_PROVIDER=openrouter

├── package.json                  # Project dependencies   HF_API_KEY=sk-or-v1-your-key-here

├── tsconfig.json                 # TypeScript configuration   MODEL_ENDPOINT=deepseek/deepseek-chat-v3.1:free

└── README.md                     # This file   PORT=3000

```   ```



## API Endpoints4. **Start the server**

   ```bash

### POST /chat/send   npm run dev

Send a message to the chatbot   ```



**Request:**📖 **Full OpenRouter setup guide**: See [OPENROUTER_SETUP.md](./OPENROUTER_SETUP.md)

```json

{## 📝 Available Scripts

  "message": "Hello, how are you?"

}- `npm run dev` - Start development server with hot reload

```- `npm run build` - Build the TypeScript project

- `npm start` - Run the production server

**Response:**- `npm test` - Run test suite

```json

{chatbot-app/   

  "response": "I'm doing well, thank you for asking! How can I help you today?"

}├── src/   You'll see a beautiful chat interface where you can talk to the AI!

```

│   ├── app.ts                    # Express application setup

### GET /health

Check if the server is running│   ├── server.ts                 # Server entry point## Usage Guidelines



**Response:**│   ├── config/

```json

{│   │   └── index.ts             # Configuration management- **Web Interface**: Simply open http://localhost:3000 in your browser and start chatting!

  "status": "ok",

  "timestamp": "2025-10-27T16:00:00.000Z"│   ├── controllers/- **API Endpoints**:

}

```│   │   └── chatController.ts    # Request handlers  - `POST /chat/send` - Send a message (body: `{ "message": "your text" }`)



## Configuration│   ├── models/  - `GET /health` - Check if the server is running



All configuration is done through environment variables in the `.env` file:│   │   └── externalModelClient.ts  # OpenRouter API client



| Variable | Description | Default |│   ├── services/

|----------|-------------|---------|

| `AI_PROVIDER` | AI provider to use (`gemini` or `openrouter`) | `gemini` |│   │   └── modelService.ts      # Business logic layer

| `GEMINI_API_KEY` | Google Gemini API key | - |

| `GEMINI_MODEL` | Gemini model to use | `gemini-2.5-flash` |│   ├── types/## Features

| `OPENROUTER_API_KEY` | OpenRouter API key | - |

| `OPENROUTER_MODEL` | OpenRouter model to use | `deepseek/deepseek-chat-v3.1:free` |│   │   └── index.ts             # TypeScript type definitions

| `PORT` | Server port | `3000` |

| `LOG_LEVEL` | Logging level | `info` |│   └── utils/

| `MODEL_MAX_TOKENS` | Maximum response length | `2048` |

| `MODEL_TEMPERATURE` | Response creativity (0-1) | `0.7` |│       └── logger.ts            # Logging utility



## Development├── .env                          # Environment variables (not in git)🧪 Full test coverage with Jest



### Running Tests├── .env.example                  # Example environment variables

```bash

npm test├── .gitignore                    # Git ignore rules## Contributing

```

├── package.json                  # Project dependencies

### Building for Production

```bash├── tsconfig.json                 # TypeScript configurationContributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

npm run build├── OPENROUTER_SETUP.md          # Detailed setup guide

npm start└── README.md                     # This file

``````



### Code Architecture## API Endpoints



The project follows a clean architecture pattern:### POST /chat/send

Send a message to the chatbot

1. **Controllers** - Handle HTTP requests and responses

2. **Services** - Contain business logic**Request:**

3. **Models** - Interface with external APIs```json

4. **Utils** - Shared utilities and helpers{

  "message": "Hello, how are you?"

## Troubleshooting}

```

### API not working

- Verify your API key is correct in `.env`**Response:**

- Check that you have an active internet connection```json

- Ensure the model name is spelled correctly{

- The chatbot will use smart fallback responses if API fails  "response": "I'm doing well, thank you for asking! How can I help you today?"

}

### Port already in use```

- Change the `PORT` in `.env` to a different number

- Or stop the process using the current port### GET /health

Check if the server is running

### TypeScript errors

- Run `npm run build` to see detailed errors**Response:**

- Ensure all dependencies are installed: `npm install````json

{

## Contributing  "status": "ok",

  "timestamp": "2025-10-23T16:00:00.000Z"

Contributions are welcome! Please feel free to submit a Pull Request.}

```

1. Fork the repository

2. Create your feature branch (`git checkout -b feature/AmazingFeature`)## Configuration

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the branch (`git push origin feature/AmazingFeature`)Edit the `.env` file to customize your chatbot:

5. Open a Pull Request

- `HF_API_KEY` - Your OpenRouter API key

## License- `MODEL_ENDPOINT` - AI model to use (default: meta-llama/llama-3.2-3b-instruct:free)

- `PORT` - Server port (default: 3000)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.- `LOG_LEVEL` - Logging level (info, debug, error)

- `MODEL_MAX_TOKENS` - Maximum response length (default: 150)

## Support

## Free AI Models

If you encounter any issues or have questions, please open an issue on GitHub.

OpenRouter offers several free models you can use:

- **meta-llama/llama-3.2-3b-instruct:free** (Recommended) - Conversational AI
- **qwen/qwen-2-7b-instruct:free** - Smart responses
- **microsoft/phi-3-mini-128k-instruct:free** - Compact but powerful

Change the `MODEL_ENDPOINT` in your `.env` file to try different models.

## Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
npm start
```

### Code Structure

The project follows a clean architecture pattern:

1. **Controllers** - Handle HTTP requests and responses
2. **Services** - Contain business logic
3. **Models** - Interface with external APIs
4. **Utils** - Shared utilities and helpers

## Troubleshooting

### OpenRouter API not working
- Verify your API key is correct in `.env`
- Check that you have an active internet connection
- Ensure the model name is spelled correctly
- The chatbot will use smart fallback responses if API fails

### Port already in use
- Change the `PORT` in `.env` to a different number
- Or stop the process using port 3000

### TypeScript errors
- Run `npm run build` to see detailed errors
- Ensure all dependencies are installed: `npm install`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenRouter for providing free AI model access
- Meta for the Llama 3.2 model
- The open-source community

## Support

If you encounter any issues or have questions:

1. Check the [OPENROUTER_SETUP.md](OPENROUTER_SETUP.md) guide
2. Review the troubleshooting section above
3. Open an issue on GitHub

## Roadmap

- [ ] Add conversation history persistence
- [ ] Support for multiple users
- [ ] Voice input/output
- [ ] Mobile app version
- [ ] Multi-language support

---

Made with care by the community
