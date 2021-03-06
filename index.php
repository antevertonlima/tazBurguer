<?php
require 'class/VerURL.php';
//clase responsavel pela troca de url - será usada apenas durante a etapa de desnvolvimento das telas do sistema
//ao informar um link interno usar a seguinte estrutura ?modulo=exemplos/xml&url=ler
$url = new VerURL;
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <!-- meta tags -->
        <meta charset="utf-8" />
        <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
                        Remove this if you use the .htaccess -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content="Site voltado para a divulgação dos produtos da lancheonete Taz Burguer e de seu seriço de delivery." />
        <meta name="author" content="DocType Solution (Everton Lima e Elison Wilson)" />
        <meta name="viewport" content="width=device-width; initial-scale=1.0" />

        <title>Taz Burguer - Devore já o seu! Sanduiches e sucos.</title>
        <!-- Replace favicon.ico -->
        <link rel="shortcut icon" href="img/favicon.ico" />
        <!-- Insercao dos arquivos css -->
        <link href="css/bootstrap.min.css" rel="stylesheet"  media="screen">
        <link href="css/bootstrap-responsive.min.css"  rel="stylesheet" media="screen">
        <link href="css/app.css"  rel="stylesheet" 	media="screen">
        <link rel="stylesheet" type="text/css" href="slide/engine1/style.css" />
        <script type="text/javascript" src="slide/engine1/jquery.js"></script>
        <script src="https://www.youtube.com/iframe_api"></script>
        <script src="http://a.vimeocdn.com/js/froogaloop2.min.js"></script>
        <script>
            function initialize() {
                var mapCanvas = document.getElementById('map-canvas');
                var mapOptions = {
                    center: new google.maps.LatLng(44.5403, -78.5463),
                    zoom: 8,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                var map = new google.maps.Map(mapCanvas, mapOptions)
            }
            google.maps.event.addDomListener(window, 'load', initialize);
        </script>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row-fluid">

                <div class="span4">
                    <div id="tazTopo">
                        <!-- Aqui fica o TAZ do topo -->
                    </div>
                </div>
                <div class="span8">
                    <div id="logo">
                        <!-- Aqui fica a logo marca -->
                        <a href="./" title=""><img src="img/logoTaz.png" alt="" title="" /></a>
                    </div>
                    <div class="menu">
                        <a href="?url=home" class="btn btn-taz btn-large-taz active" title="Início">Início</a>
                        <a href="?url=delivery" class="btn btn-taz btn-large-taz"  title="Delivery">Delivery / Cardápio</a>
                        <a href="?url=comoChegar" class="btn btn-taz btn-large-taz"  title="Como Chegar">Como Chegar</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- ======================= Conteudo ============================== -->
        <div class="content">
            <?php
            //troca efetivamente a tela do sistema
            $urli = ( isset($_GET['url']) && !empty($_GET['url']) ) ? $_GET['url'] : "";
            $url->trocarURL($urli);
            ?>
        </div>
        <!-- ======================= Rodape ============================== -->
        <div class="container-fluid footer">
            <div class="row-fluid">
                <!-- ======================= Logo Rede SOcial ============================== -->
                <div class="span1">
                    <a href="https://www.facebook.com/pages/Taz-Burguer-Sandu%C3%ADches-e-Sucos/1520272128229610"  target="_blank">
                        <span class="face"></span>
                    </a> 
                </div>
                <!-- ======================= Logo Rede SOcial ============================== -->
                <!-- ======================= Informacoes das Lojas ============================== -->
                <div class="span11">
                    <div class="row-fluid">
                        <div class="span4 loja">
                            <p>
                                <b>São Cristovão</b> <br />
                                (85) 3269.3529<br />
                                Av. Castelo de Castro 330<br />
                                <a href="#mapSC" role="button" class="btn btn-taz btn-block mapSC" data-toggle="modal" data-target="#mapSC">Como chegar</a>
                            </p>
                        </div>
                        <div class="span4 loja">
                            <p>
                                <b>José Walter</b> <br /> 
                                (85) 3291.2074 <br /> 
                                Av. João Araújo Lima 571<br />
                                <a href="#mapJW" role="button" class="btn btn-taz btn-block mapJW" data-toggle="modal" data-target="#mapJW">Como chegar</a>
                            </p>
                        </div>
                        <div class="span4 loja">
                            <p>
                                <b>Cidade dos Funcionários</b><br /> 
                                (85) 3275.7058 <br /> 
                                Av. Desembargador Gonzaga 774<br />
                                <a href="#mapCF" role="button" class="btn btn-taz btn-block mapCF" data-toggle="modal" data-target="#mapCF">Como chegar</a>
                            </p>
                        </div>
                        <div class="clearfix"></div>
                        <div class="span11" style="text-align: center">
                            <b>Powered By <a href="http://doctypesolution.com.br" target="_blank">DoctypeSolution</a></b>
                        </div>
                    </div>                        

                </div>
                <!-- ======================= Fim Informacoes das Lojas ============================== -->
            </div>
        </div>
        <!-- ======================= Fim Rodape ============================== -->
        <!-- ======================= JS Facebook ============================== -->
        <script src="http://code.jquery.com/jquery-latest.js"></script>
        <script type="text/javascript" src="slide/engine1/wowslider.js"></script>
        <script type="text/javascript" src="slide/engine1/script.js"></script>
        <script src="js/bootstrap-modal.js"></script>
        <script src="js/bootstrap-pager.js"></script>
        <script src="js/app.js"></script>
        <div class="modal fade" id="mapSC">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">São Cristovão</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row-fluid">
                            <iframe class="span12" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1990.4493697506584!2d-38.5215419!3d-3.8319006000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74fd60148c2a3%3A0xe384cbec7b35d00f!2sAv.+Castelo+de+Castro%2C+330+-+Jangurussu%2C+Fortaleza+-+CE%2C+60866-681!5e0!3m2!1spt-BR!2sbr!4v1417882306205" height="450" frameborder="0" style="border:0"></iframe>
                        </div>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
        <div class="modal fade" id="mapJW">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">José Walter</h4>

                    </div>
                    <div class="modal-body">
                        <div class="row-fluid">
                            <iframe class="span12" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d995.2309245185712!2d-38.5592969483406!3d-3.826533678403469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74e0350177a81%3A0x2c997a0f15ca8f!2sAvenida+Joao+de+Araujo+Lima%2C+571!5e0!3m2!1spt-BR!2sbr!4v1417882256879" height="450" frameborder="0" style="border:0"></iframe>
                        </div>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
        <div class="modal fade" id="mapCF">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">Cidade dos Funcionários</h4>

                    </div>
                    <div class="modal-body">
                        <div class="row-fluid">
                            <iframe class="span12" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3981.064932719492!2d-38.5000533!3d-3.7960208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f722e516c17%3A0x41b6fb182b53bc2e!2sAv.+Desembargador+Gonzaga%2C+774+-+Cidade+dos+Funcion%C3%A1rios%2C+Fortaleza+-+CE!5e0!3m2!1spt-BR!2sbr!4v1417882122439" height="450" frameborder="0" style="border:0"></iframe>
                        </div>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
    </body>    
    <!-- ======================= JS Facebook ============================== -->
</html>