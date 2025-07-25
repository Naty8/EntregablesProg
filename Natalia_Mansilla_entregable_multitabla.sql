-- Archivo de entregable SQL generado por Natalia Mansilla
-- Fecha de creación: 2025-07-24

-- 1. Todos los productos que no figuran en ninguna factura
SELECT p.*
FROM productos p
LEFT JOIN detalle_factura d ON p.id = d.id_producto
WHERE d.id_producto IS NULL;

-- 2. Todos los productos que se vendieron en el 2017
SELECT DISTINCT p.*
FROM productos p
JOIN detalle_factura d ON p.id = d.id_producto
JOIN facturas f ON d.id_factura = f.id
WHERE YEAR(f.fecha) = 2017;

-- 3. Productos vendidos en la factura N° 5
SELECT p.*
FROM productos p
JOIN detalle_factura d ON p.id = d.id_producto
WHERE d.id_factura = 5;

-- 4. Productos que se vendieron, valen menos de 100 y tienen stock mayor a 200
SELECT DISTINCT p.*
FROM productos p
JOIN detalle_factura d ON p.id = d.id_producto
WHERE p.precio < 100 AND p.stock > 200;

-- 5. Mostrar los nombres y apellidos de los clientes que hayan comprado
-- al menos un producto que contenga las letras 'ui' o 're' en el campo descripción.
-- Mostrar además de qué producto se trata, nombrando la columna como "producto comprado".
SELECT DISTINCT c.nombre, c.apellido,
       p.nombre AS "producto comprado"
FROM clientes c
JOIN facturas f ON c.id = f.id_cliente
JOIN detalle_factura d ON f.id = d.id_factura
JOIN productos p ON d.id_producto = p.id
WHERE p.descripcion LIKE '%ui%' OR p.descripcion LIKE '%re%';
