import transformers
import torch

def get_input_str(user_input: str):
    prompt_input = (
        'Below is an instruction that describes a task, paired with an input that provides further context.'
        'Write a response that appropriately completes the request.\n\n'
        '### Instruction:\n{instruction}\n\n### Input:\n{input}\n\n### Answer:'
    )

    prompt = {
        "instruction": "You are a doctor, answer the following medical question",
        "input": f"{user_input}"
    }
    input_str = [prompt_input.format_map(prompt)]
    return input_str

def predict(user_input: str):
    tokenizer = transformers.LlamaTokenizer.from_pretrained('axiong/PMC_LLaMA_13B')
    model = transformers.LlamaForCausalLM.from_pretrained('axiong/PMC_LLaMA_13B')
    input_str = get_input_str(user_input)
    model_inputs = tokenizer(
        input_str,
        return_tensors='pt',
        padding=True,
    )
    with torch.no_grad():
        topk_output = model.generate(
            model_inputs.input_ids,
            max_new_tokens=1000,
            top_k=50
        )
        output_str = tokenizer.batch_decode(topk_output)
    return output_str[0].replace(input_str[0], '')
    