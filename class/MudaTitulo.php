<?PHP

/* * ************************************************
 * *  CLASSE DE INCLUSÃO DE PÁGINA NO INDEX
 * *  MÉTODO - trocarURL($url)
 * *  Data: 09-05-2009 - Versão 1.0
 * ************************************************ */

class MudaTitulo {
    /*
     * @param string $acao indica se é cadastro, edicao ou listagem
     * @param string $modulo indica o modulo do arquivo
     * @param string $frase Monta o titulo a ser exibido
     * @acess public
     */
    public function trocarTitulo($acao, $modulo){
        if (!empty($acao) && !empty($modulo)) {
            if( $acao == 'cadastrar' ){
                $acaoM = 'Cadastro';
            } elseif ( $acao == 'editar' ){
                $acaoM = 'Edição';
            }
            elseif ( $acao == 'listar' ){
                $acaoM = 'Listagem';
            }
            $modulo = explode("/", $modulo);
            $modulo = strtoupper($modulo['1']);
            $frase = "{$acaoM} de {$modulo}";
        }
        echo $frase;
    }
}