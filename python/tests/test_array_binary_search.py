from code_challenges.array_binary_search import __version__
from code_challenges.array_binary_search.array_binary_search import BinarySearch

def test_version():
    assert __version__ == '0.1.0'

arry = [ 2, 3, 4, 15, 16, 23, 42, 55, 66, 77, 80]
x = 55

def test_one():
    actual = BinarySearch(arry, x)
    expected = 2
    assert actual == expected

def test_two():
    actual = BinarySearch(arry, x)
    expected = -1
    assert actual == expected


