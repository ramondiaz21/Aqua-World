-- ============= PROCEDIMIENTOS Y FUNCIONES PARA ADMIN DE USUARIO Y CONTRASEÑAS (4) =======================
	
	-- INICIO DE SESIÓN ========================================================================
	DROP PROCEDURE IF EXISTS SP_AUTH;

	DELIMITER $$

	CREATE PROCEDURE SP_AUTH(IN _user VARCHAR(50), IN _pass VARCHAR(200), IN _clave VARCHAR(5))
	BEGIN

		DECLARE _password VARCHAR(200);
		DECLARE _count INT;
		DECLARE _id INT;
		DECLARE _idAdmin INT;
		DECLARE _nombre VARCHAR(200);

		SELECT FN_GENERAPASS(_pass) INTO _password;

		SELECT COUNT(id), id, nombre INTO _count, _idAdmin, _nombre FROM usuarios WHERE username = _user AND password = _password AND clave = _clave;

		IF _count > 0 THEN
			SELECT _count count, _idAdmin id, _idAdmin id_admin, _nombre nombre, 1 rol;
		ELSE
			SELECT COUNT(C.id) count, C.usuario id_admin, C.id, C.nombre, 2 rol FROM colaboradores C 
			JOIN usuarios U ON U.id = C.usuario WHERE U.clave = _clave AND C.username = _user AND C.password = _password ;
		END IF;
	END $$
	DELIMITER ;



	-- GENERAR PASSWORD NUEVA ==================================================================
	DROP FUNCTION IF EXISTS FN_GENERAPASS;

	DELIMITER $$

	CREATE FUNCTION FN_GENERAPASS(_pass VARCHAR(200)) RETURNS varchar(200) CHARSET utf8
	BEGIN

		DECLARE _salt VARCHAR(100) DEFAULT 'lXyfOakNngJNDBB5saDprp2';
		DECLARE _password VARCHAR(200);
		SET _password = CONCAT(_salt,'',_pass);
		RETURN SHA(md5(_password));
	END $$
	DELIMITER ;