from array_shift import __version__
from array_shift.array_shift import insertShiftArray

def test_even():
    actual = insertShiftArray(a)
    expected = [2,4,5,6,8]
    assert actual == expected

def test_odd():
    actual = insertShiftArray()
    expected = [4,8,15,16,23,42]
    assert actual == expected

