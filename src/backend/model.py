from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch

def predict(user_input):
    model = GPT2LMHeadModel.from_pretrained("gpt2")
    tokenizer = GPT2Tokenizer.from_pretrained("gpt2")

    tokenized_input = tokenizer(user_input, return_tensors='pt')["input_ids"]
    with torch.no_grad():
        generated = model.generate(tokenized_input, max_new_tokens=100, top_k=20)
        return tokenizer.decode(generated[0])