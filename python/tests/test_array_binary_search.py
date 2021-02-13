# from code_challenges.array_binary_search import __version__
from code_challenges.array_binary_search.array_binary_search import binary_Search

# def test_version():
#     assert __version__ == '0.1.0'

arry = [ 2, 3, 4, 15, 16, 23, 42, 55, 66, 77, 80, 89 ]

def test_one():
    actual = binary_Search(arry, 7)
    expected = 55
    assert actual == expected

def test_two():
    actual = binary_Search(arry, 11)
    expected = -1
    assert actual == expected

def test_three():
    actual = binary_Search(arry, 0)
    expected = 2
    assert actual == expected
