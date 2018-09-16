-- -------------
-- Anexo Parte 1
-- -------------

-- InnoDB es una tecnología de almacenamiento de datos de código abierto para la base de datos MySQL,
-- incluido como formato de tabla estándar en todas las distribuciones de MySQL AB a partir de las 
-- versiones 4.0. Su característica principal es que soporta transacciones de tipo ACID y bloqueo de 
-- registros e integridad referencial. InnoDB ofrece una fiabilidad y consistencia muy superior 
-- a MyISAM, la anterior tecnología de tablas de MySQL, si bien el mejor rendimiento de uno u otro 
-- formato dependerá de la aplicación específica.

-- MyISAM
--     Mayor velocidad en general a la hora de recuperar datos.
--     Recomendable para aplicaciones en las que dominan las sentencias SELECT ante los INSERT / UPDATE.
--     Ausencia de características de atomicidad ya que no tiene que hacer comprobaciones de la integridad referencial, ni bloquear las tablas para realizar las operaciones, esto nos lleva como los anteriores puntos a una mayor velocidad.


-- ejemplo de tabla con tecnologia InnoDB
create table clientes2 (
codigo integer auto_increment,
nombre varchar(20) not null,
apellido varchar(20) not null,
cuit varchar(13),
direccion varchar(50),
comentarios varchar(140),
primary key (codigo)
)engine=InnoDB;


-- ejemplo de tabla con tecnologia myIsam
create table clientes3 (
codigo integer auto_increment,
nombre varchar(20) not null,
apellido varchar(20) not null,
cuit varchar(13),
direccion varchar(50),
comentarios varchar(140),
primary key (codigo)
)engine=myIsam;

-- en la actualidad por defecto es InnoBD

