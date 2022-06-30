

from flask import Blueprint,render_template,request,flash,redirect,url_for
from .models import User
from . import db
import sqlite3 



auth = Blueprint('auth',__name__,template_folder='templates')


con = sqlite3.connect("pharma.db")  
print("Database opened successfully") 
# con.execute("create table pharmaci (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, address TEXT NOT NULL)")  
# print("Table created successfully")  




 
@auth.route("/inscription")  
def add():  
    return render_template("insc_phar.html",
                        custom_css="insc_phar")  


  
@auth.route("/savedetails",methods = ["POST","GET"])  
def saveDetails():  
    msg = "msg" 
    if request.method == "POST":  
        try:  
            name = request.form["name"]  
            email = request.form["email"]  
            address = request.form["address"]  
            date = request.form["date"]  
            tel = request.form["tel"]  
            with sqlite3.connect("pharma.db") as con:  
                cur = con.cursor()  
                cur.execute("INSERT into pharmaci (name, email, address, date, tel) values (?,?,?,?,?)",(name,email,address,date,tel))  
                con.commit()  
                msg = "Employee successfully Added" 
        except:  
            con.rollback()  
            msg = "We can not add the employee to the list" 
        finally:  
            return render_template("insc_phar.html",
                        custom_css="insc_phar",msg = msg)  
            con.close()  


 
@auth.route('/pharmacie', methods=['GET','POST'])
def pharmacie():

    con = sqlite3.connect("pharma.db")  
    con.row_factory = sqlite3.Row  
    cur = con.cursor()  
    cur.execute("select * from pharmaci")  
    rows = cur.fetchall()  


    return render_template("client.html",
                                custom_css="client",rows = rows)




@auth.route('/nigtpharmacie')
def pharmacieInfo():
    

    return render_template("night.html",  custom_css="nightstyle") 








@auth.route('/abouts_ass')
def sing_up():
    return render_template("aboutas.html",
                            custom_css="aboutas")






@auth.route('/contact')
def cont():
    return render_template("contact.html",
                            custom_css="contact")


@auth.route('/info')
def info():
    return render_template("abouts.html",
                            custom_css="info")



