import calendar

print('Welcome to the calender app!')
year = int(input('Please enter any year: '))
month = int(input('Please enter any month: '))

print(calendar.month(year, month))
print('Have a nice day!')