# ordenando en listas

my_array = [10, 7, 4, 2, 6, 5, 12]

def ordenar(arr):
  arr.sort()
  return arr


print(ordenar(my_array))


# probando objetos en py
user = {
  'name': 'joshua',
  'age': 17,
  'job': 'developer'
}


name = user['name']
user['hobbies'] = ['programing', 'soccer', 'music', 'read']

print(name)
print(user['hobbies'])