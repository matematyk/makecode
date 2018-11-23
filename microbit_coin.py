from microbit import *
import random


x_coin = random.randint(0, 4)
y_coin = random.randint(0, 4) 
x_char = 2
y_char = 2

while True:
    display.clear()
    display.set_pixel(x_char, y_char, 9)
    display.set_pixel(x_coin, y_coin, 9)
    
    if x_coin == x_char and y_coin == y_char:
        x_coin = random.randint(0, 4)
        y_coin = random.randint(0, 4) 
        sleep(100)
        
    if accelerometer.get_x() < 0:
        x_char = x_char - 1
        sleep(100)
        
    if accelerometer.get_y() < 0:
        y_char = y_char - 1
        sleep(100)
        
    if accelerometer.get_x() > 0:
        x_char = x_char + 1
        
    if accelerometer.get_y() > 0:
        y_char = y_char + 1
