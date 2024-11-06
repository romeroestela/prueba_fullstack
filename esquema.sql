--Tabla marketers -- 
create table marketers (
	id SERIAL PRIMARY KEY, -- ID único de la comercializadora y se autoincrementa (con 'SERIAL').
	name VARCHAR(255) NOT NULL, -- Nombre de la comercializadora.
	created_at TIMESTAMP DEFAULT NOW(), -- Fecha de creación del registro.
	updated_at TIMESTAMP DEFAULT NOW() -- Fecha de la última actulización del regristro.
);


-- Tabla operations --
create table operations (
	id SERIAL PRIMARY KEY, -- ID único de la opearación
	marketer_id INT NOT NULL REFERENCES marketers(id) ON DELETE SET NULL,
	-- Hace referencia al 'id' de la tabla marketers.
	--'NOT NULL' el campo no puede estar vacío.
	--'ON DELETE SET NULL' si se elimina, este campo cambiará a NULL.
	client_id INT NOT NULL REFERENCES marketers(id) ON DELETE SET NULL,
	type VARCHAR(5) CHECK (type IN ('buy', 'sell')) NOT NULL,
	-- El 'CHECK' asegura que el valor sea solo uno de esos dos: 'buy' o 'sell'.
	amount NUMERIC NOT NULL CHECK (amount > 0),
	-- 'NUMERIC' sin especificar límite de decimales. 
	-- 'CHECK (amount > 0)' asegura que siempre sea mayot a 0
	price NUMERIC NOT NULL CHECK (price > 0)
);
