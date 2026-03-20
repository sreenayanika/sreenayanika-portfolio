# Building a RAG Pipeline with LangChain, FAISS, and AWS

## Overview
I built a Retrieval Augmented Generation (RAG) system to answer questions over internal documents more accurately. The goal was to move away from generic LLM responses and make outputs grounded in real data.

## Problem
LLMs are powerful, but they don’t know your data. In real-world use cases, this leads to vague or incorrect answers. For enterprise scenarios, this is not acceptable because responses need to be reliable and context-aware.

## Solution
To solve this, I implemented a RAG pipeline where relevant documents are retrieved first and then passed to the LLM as context. This significantly improves response accuracy and reduces hallucination.

## Architecture
The system is designed as a modular pipeline:

- Documents (PDFs and text files) are ingested and preprocessed  
- Text is converted into embeddings using OpenAI or Hugging Face models  
- Embeddings are stored in a vector database (FAISS/Pinecone)  
- A similarity search retrieves the most relevant chunks  
- Retrieved context is passed to an LLM (GPT/Claude)  
- A FastAPI layer exposes the system as an API  
- The system is deployed on AWS for scalability  

## Tech Stack
Python, FastAPI, LangChain, FAISS, Pinecone, AWS, OpenAI, Hugging Face

## Key Features
- Semantic search for accurate document retrieval  
- Context aware responses using LLMs  
- Microservice based API design  
- Scalable deployment on AWS  

## Challenges
One of the main challenges was improving retrieval quality. Early versions returned irrelevant chunks, which affected the final response.

Another issue was latency. Vector search combined with LLM calls can slow things down, so optimizing response time was critical.

Token limits were also a constraint, especially when dealing with large documents.

## Improvements
- Improved chunking strategy to increase retrieval accuracy  
- Introduced caching (Redis) to reduce repeated LLM calls  
- Optimized prompts to make responses more consistent  
- Tuned embedding selection for better semantic matching  

## Conclusion
This approach made a noticeable difference in response quality. Instead of generic answers, the system provides context-aware outputs grounded in actual data, making it more suitable for real world applications.
