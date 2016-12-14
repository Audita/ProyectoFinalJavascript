/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     14/12/2016 15:02:06                          */
/*==============================================================*/


drop table if exists ADOPCION;

drop table if exists DONACION;

drop table if exists MASCOTA;

drop table if exists PERSONA;

/*==============================================================*/
/* Table: ADOPCION                                              */
/*==============================================================*/
create table ADOPCION
(
   ID_ADOPCION          int not null,
   CI_PERSONA           int,
   ID_MASCOTA           int,
   FECHA_ADOPCION       date,
   ESTADO_ADOPCIOM      char(25),
   primary key (ID_ADOPCION)
);

/*==============================================================*/
/* Table: DONACION                                              */
/*==============================================================*/
create table DONACION
(
   ID_DONACIONES        int not null,
   CI_PERSONA           int,
   TIPO_DONACION        char(50),
   CANTIDAD             numeric(8,0),
   DESCRIPCION          char(25),
   primary key (ID_DONACIONES)
);

/*==============================================================*/
/* Table: MASCOTA                                               */
/*==============================================================*/
create table MASCOTA
(
   ID_MASCOTA           int not null,
   ID_ADOPCION          int,
   NOMBRE_MASCOTA       char(20),
   EDAD_MASCOTA         int,
   FOTO_MASCOTA         longblob,
   TIPO_MASCOTA         char(30),
   GENERO_MASCOTA       char(10),
   TAMANO_MASCOTA       char(20),
   primary key (ID_MASCOTA)
);

/*==============================================================*/
/* Table: PERSONA                                               */
/*==============================================================*/
create table PERSONA
(
   CI_PERSONA           int not null,
   NOMBRE_PERSONA       char(15),
   APELLIDO_PERSONA     char(25),
   DIRECCION_PERSONA    char(50),
   TELEFONO_PERSONA     numeric(8,0),
   primary key (CI_PERSONA)
);

alter table ADOPCION add constraint FK_RELATIONSHIP_2 foreign key (ID_MASCOTA)
      references MASCOTA (ID_MASCOTA);

alter table ADOPCION add constraint FK_RELATIONSHIP_5 foreign key (CI_PERSONA)
      references PERSONA (CI_PERSONA);

alter table DONACION add constraint FK_RELATIONSHIP_3 foreign key (CI_PERSONA)
      references PERSONA (CI_PERSONA);

alter table MASCOTA add constraint FK_RELATIONSHIP_4 foreign key (ID_ADOPCION)
      references ADOPCION (ID_ADOPCION);

