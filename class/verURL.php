<?php
/* * ************************************************
 * *  CLASSE DE INCLUSÃO DE PÁGINA NO INDEX
 * *  MÉTODO - trocarURL($url)
 * *  Data: 09-05-2009 - Versão 1.0
 * ************************************************ */

class VerURL {
    /*
     * @param string $modulo diretorio em que o arquivo a ser incluido se encontra
     * @param string $url o que sera incluido
     * @acess public
     */
    public function trocarURL( $url ){
        if (empty( $url )) {
            $url = "views/home.php";
        } else {
            $url = "views/$url.php";
        }
        if ( file_exists( $url ) ) {
            include_once( $url );
        } else {
            echo '<div class="container-fluid">';
                echo '<div class="row-fluid">';
                echo '
                    <div class="span12">
                        <div class="w-box-header">
                            <h4>A página solicitada não existe.</h4>
                        </div>
                    </div>';
                
                echo '</div>';
            echo '</div>';
        }
    }
}