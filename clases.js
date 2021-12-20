class Stand
{
    constructor(n, r, dP, s, pE, pR, dVP, grito)
    {
        this.imagen = new Image();
        this.nombre = n
        this.range = r;
        this.destructivePower = dP;
        this.speed = s;
        this.persitence = pE;
        this.precision = pR;
        this.developmentPotential = dVP;
        this.grito = grito;

        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.grito);
    }
    mostrar()
    {
        
        document.write("<p class='contenido'");
        document.write("<strong>" + this.nombre + "</strong> <br />");
        document.body.appendChild(this.imagen);
        document.write("Poder destructivo: " + this.destructivePower + "<br />");
        document.write("Velocidad: " + this.speed + "<br />");
        document.write("Rango: " + this.range + "<br />");
        document.write("Persistencia: " + this.persitence + "<br />");
        document.write("Potencial de desarrollo: " + this.developmentPotential + "<br />");
        document.write("</p>");
        document.write("<hr class='linea'>")
        
    }
}