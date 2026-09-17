def count_and_sum_vowels(user_input):
    user_input = user_input.strip().lower()
    vowels = "aeiou"
    vowel_count = 0
    ascii_sum = 0
    for char in user_input:
        if char in vowels:
            vowel_count += 1
            ascii_sum += ord(char)
    return vowel_count, ascii_sum
