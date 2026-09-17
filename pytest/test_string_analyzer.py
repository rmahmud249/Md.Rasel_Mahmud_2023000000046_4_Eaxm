from string_analyzer import count_and_sum_vowels

def test_standard_string():
    assert count_and_sum_vowels("Hello") == (2, 212)

def test_no_vowels_and_empty():
    assert count_and_sum_vowels("") == (0, 0)
    assert count_and_sum_vowels("fly") == (0, 0)

def test_uppercase_and_symbols():
    assert count_and_sum_vowels("A1! e") == (2, 198)