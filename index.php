<!DOCTYPE html>
<html lang="en">

<head>
  <?php include 'includes/links.html'; ?>
  <title>Login | AQUA WORLD</title>
</head>

<body id="" class="" style="background-color: #f8f9fc; position: relative; min-height: 100vh;">
  <?php include 'includes/navbar.php'; ?>

  <div class="container" style="height: 100%;">
    <?php 
    /*session_start();
    if(isset($_SESSION['login'])) {
      include 'views/clientes.php';
      //die();
    } else {
      include 'views/login.php';
      //die();
    };*/
      include 'views/forms.php';
    ?>

  </div>
  <a class="scroll-to-top" href="#page-top">
    <i class="fa-solid fa-angle-up"></i>
  </a>
  <?php include 'includes/footer.php'; ?>

  <?php include 'includes/scripts.html'; ?>

  <script src="resources/js/signature.js"></script>
</body>

</html>