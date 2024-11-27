# algoritmo de utlimo número
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def array(arr):
    for i in range(len(arr)):
        elemento_final = arr[len(arr) - i - 1]
        print(elemento_final)        

array(numbers) #Llamando a la funcion