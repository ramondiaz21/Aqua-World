-- ----------------------------
-- Procedure structure for SP_AUTH
-- ----------------------------
DROP PROCEDURE IF EXISTS SP_AUTH;
DELIMITER ;;
CREATE PROCEDURE SP_AUTH(IN _user VARCHAR(50), IN _pass VARCHAR(200)
)
BEGIN
    DECLARE _password VARCHAR(200);
    SELECT FN_GENERAPASS(_pass) INTO _password;
    SELECT * FROM usuarios 
    WHERE username = _user AND password = _pass AND status = 1;
  END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for SP_AUTH
-- ----------------------------
DROP PROCEDURE IF EXISTS SP_AUTH_COL;
DELIMITER ;;
CREATE PROCEDURE SP_AUTH_COL(
IN _user VARCHAR(50), IN _pass VARCHAR(200))
BEGIN
    DECLARE _password VARCHAR(200);
    SELECT FN_GENERAPASS(_pass) INTO _password;
    SELECT * FROM colaboradores
    WHERE username = _user AND password = _pass AND status = 1;
  END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for SP_GET_PERMISSION
-- ----------------------------
DROP PROCEDURE IF EXISTS SP_GET_PERMISSION;
DELIMITER ;;
CREATE PROCEDURE SP_GET_PERMISSION(IN _perfil INT)
BEGIN
  SELECT * FROM vwModPerfiles WHERE perfil_id = _perfil;
END
;;
DELIMITER ;

-- ----------------------------
-- Function structure for FN_GENERAPASS
-- ----------------------------
DROP FUNCTION IF EXISTS FN_GENERAPASS;
DELIMITER ;;
CREATE FUNCTION FN_GENERAPASS(_pass VARCHAR(200)) RETURNS varchar(200) CHARSET utf8
READS SQL DATA
DETERMINISTIC
BEGIN
    DECLARE _salt VARCHAR(100) DEFAULT '-t3CN01oG1a5%C0s173c!';
    DECLARE _password VARCHAR(200);
    SET _password = CONCAT(_salt,'',_pass);
    RETURN SHA(md5(_password));
  END
;;
DELIMITER ;
