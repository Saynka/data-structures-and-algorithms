# Returns index of x in arryy if present, else -1 
def BinarySearch(arry, x):
    (left, right) = (0, len(arry) - 1)
    while left <= right:
        mid = (left + right) // 2
        if x == arry[mid]:
            print(mid)
            break
        elif x < arry[mid]:
            right = mid -1
        else:
            left = mid + 1
    print(-1)
  
arryy = [ 2, 3, 4, 15, 16, 23, 42, 55, 66, 77, 80 ]
x = 55
  
# # Function call 
# result = BinarySearch(arryy, 0, len(arryy)-1, x) 
  
# if result != -1:
#     print("Element is present at index", str(result)) 
# else: 
#     print("Element is not present")

