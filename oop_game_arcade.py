from microbit import *
import random
class Gracz():
    poz_x = 2
    poz_y = 4
    
    def przesun_w_lewo(self):
        self.poz_x = self.poz_x - 1
    
    def przesun_w_prawo(self):
        self.poz_x = self.poz_x + 1 

class Przeciwnik():
    poz_x = random.randint(0, 4)
    poz_y = 0
    
    def zejdz_w_dol(self):
        self.poz_y = self.poz_y + 1

class Game():
    score = 0
    fps = 500
    
    def main_loop(self):
        p = Gracz()
        e = Przeciwnik()
        while True:
            display.clear()
            display.set_pixel(p.poz_x, p.poz_y, 9)
            display.set_pixel(e.poz_x, e.poz_y, 6)
            if p.poz_x == e.poz_x and p.poz_y == e.poz_y:
                display.scroll("game over")
                display.scroll(self.score)
                break
            
            if button_a.was_pressed() and p.poz_x > 0:
                p.przesun_w_lewo()
            if button_b.was_pressed() and p.poz_x < 4:
                p.przesun_w_prawo()
            e.zejdz_w_dol()
            if e.poz_y > 4:
                self.score += 1
                e.poz_x = random.randint(0, 4)
                e.poz_y = 0
            self.fps = self.fps - 50
            sleep(self.fps)
g = Game() 
g.main_loop()
