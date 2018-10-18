<!DOCTYPE html>
<html lang="eng">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <link rel="stylesheet" href="style.css" type="text/css"/>
  <title>
    Tree
  </title>
</head>

<body>
  <ul class="tree">
    <?php
      function build_html($assembly)
      {
        $response = "<li><a href=\"#\"><span></span>" .$assembly['title'] ."</a>";
        if ($assembly['children']) {
          $response .= "<ul>";
          foreach ($assembly['children'] as $subassembly) {
            $response .= build_html($subassembly);
          }
          $response .= "</ul>";
        }

        $response .= "</li>";
        return $response;
      }

      $jsondata = file_get_contents("tree.json");
      $solarboat = json_decode($jsondata, TRUE);

      $response = build_html($solarboat, $response);
      echo $response;
    ?>
  </ul>
<script type="text/javascript" src="jstree.js"></script>
</body>
