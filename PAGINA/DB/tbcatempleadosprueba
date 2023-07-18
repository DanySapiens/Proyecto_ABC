CREATE TABLE tbcatempleadosprueba(
  --NOMBRECAMBIO TIPOCAMPO ;
  keyx INT GENERATED ALWAYS AS IDENTITY, --serial
  nombre VARCHAR(50),
  apellidopaterno VARCHAR(50),
  apellidomaterno VARCHAR(50),
  direccion VARCHAR(60),
  codigopostal VARCHAR(5),
  telefono VARCHAR(10),
  curp VARCHAR(18),
  nss VARCHAR(11),
  fechaalta DATE,
  numeroempleado INTEGER PRIMARY KEY,
  puesto INTEGER,
  fechabaja DATE DEFAULT '1900-01-01', --AAAA/MM/DD;
  estatus SMALLINT DEFAULT 1,
  causabaja VARCHAR DEFAULT ''
);

