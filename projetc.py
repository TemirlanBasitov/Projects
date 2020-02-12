import matplotlib.pyplot as plt # Here I add all the libraries that i need to perform this project
import numpy as np
from numpy import sin, cos, pi
import math
import sys
from PyQt5 import QtCore, QtWidgets
from PyQt5.QtWidgets import QMainWindow, QWidget, QLabel, QLineEdit #from existing libraries I import classes to perform creating of window etc. 
from PyQt5.QtWidgets import QPushButton
from PyQt5.QtCore import QSize    

class MainWindow(QMainWindow): # I define my MainWindow class with init function to make this window run
    def __init__(self):
        QMainWindow.__init__(self)

        self.setMinimumSize(QSize(520, 200))    
        self.setWindowTitle("Sine & Cosine wave generator") 

        self.mainLabel = QLabel(self)
        self.mainLabel.setText(' Please enter starting and end point in radians')
        self.mainLabel.move(160, 5)
        self.mainLabel.resize(400,32)
        self.nameLabel = QLabel(self)     # Here I started to deisign and move my window
        self.nameLabel.setText('Starting point:')
        self.line = QLineEdit(self)
        self.nameLabel2 = QLabel('End point')
        self.line2 = QLineEdit(self)

        self.line.move(100, 20)
        self.line2.move(100,60)
        self.line.resize(50, 32)
        self.nameLabel.move(20, 20)
        self.line2.resize(50,32)
        self.nameLabel2.move(20, 60)

        pybutton = QPushButton('Generate waves', self) #This is my button designed and connected to the Plot menthod
        pybutton.clicked.connect(self.clickMethod)
        pybutton.resize(110,32)
        pybutton.move(100, 100)        

    def clickMethod(self): #This my plot method, it takes two variables starting end ending points frpm two labels above
        a= int(self.line.text()) #start point fron user
        b=int(self.line2.text()) # end point from user
        
        x = np.arange(a,b,0.1)   # (start,stop,step) it takes numbers from a to b in array by every 0.1 radian
        y = np.sin(x)
        z = np.cos(x)
        plt.plot(x,y,x,z)
        plt.figtext(.2, .9, "Brown wave is cosine and blue is sine wave")
        plt.show()

        

if __name__ == "__main__":
    app = QtWidgets.QApplication(sys.argv)
    mainWin = MainWindow()
    mainWin.show()
    sys.exit( app.exec_() )
