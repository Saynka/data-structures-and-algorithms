# Returns index of x in arry if present, else -1 
def BinarySearch(arry, low, high, x): 
  
    # Check base case 
    if high >= low: 
  
        mid = (high + low) // 2
  
        # If element is present at the middle itself 
        if arry[mid] == x: 
            return mid 
  
        # If element is smaller than mid, then it can only 
        # be present in left subarryay 
        elif arry[mid] > x: 
            return BinarySearch(arry, low, mid - 1, x) 
  
        # Else the element can only be present in right subarryay 
        else: 
            return BinarySearch(arry, mid + 1, high, x) 
  
    else: 
        # Element is not present in the arryay 
        return -1
  
# Test arryay 
arry = [ 2, 3, 4, 15, 16, 23, 42, 55, 66, 77, 80]
x = 55
  
# Function call 
result = BinarySearch(arry, 0, len(arry)-1, x) 
  
if result != -1:
    print("Element is present at index", str(result)) 
else: 
    print("Element is not present") 