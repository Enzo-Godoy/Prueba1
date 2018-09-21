-- Clausula Select. 
SELECT * 
FROM nombre_tabla; 

--Orden de clausulas with sql. 
SELECT select_list 
[INTO new_table]                         --- Clausula SELECT , extraedor de datos de la DB. 
[WHERE search_condition]                 --- Clausula where, condicionador para la obteneción de registros. 
[GROUP BY boup_by_expression]            --- Clausula order by, oagrupamiento de registros en un campo. 
[HAVING search_condition]                --- Clausula having, condicionador de campos resultantes de uso de funciones de agrup.
[ORDER BY order_expression [ASC|DESC]]   --- Clausula order by, ordenamiento de registros en un grupo.


-- Selección de campos en una tabla. 
SELECT campo2, campo2 
FROM table_name; 

SELECT campo1 AS "ALIASC-1", campo2 "ALIAC-2" 
FROM table_name AS "ALIAST-1"; 

-- Ejemplo de todos campos de una lista y uso de alias en la tabla. 
SELECT * 
FROM table_name AS "X"; 

































