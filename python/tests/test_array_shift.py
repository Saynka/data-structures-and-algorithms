from array_shift import __version__
from array_shift.array_shift import insertShiftArray

def test_version():
    assert __version__ == '0.1.0'

a = [2,4,6,8]
b = [4,8,15,23,42]

def test_even():
    actual = insertShiftArray(a,5)
    expected = [2,4,5,6,8]
    assert actual == expected

def test_odd():
    actual = insertShiftArray(b,16)
    expected = [4,8,15,16,23,42]
    assert actual == expected

