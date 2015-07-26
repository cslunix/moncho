(function(){
  angular.module('textAngularTest', ['textAngular'])
  .controller('wysiwygeditor',['$scope','$http',function ($scope,$http) {
    $scope.orightml = '';
    $scope.htmlcontent = $scope.orightml;
    $scope.disabled = false;

    $scope.envia = function(data){
    	var contenido = {data: data};
  		$http({method:'POST',url: 'api/to_pdf.php', data:$.param(contenido), headers : { 'Content-Type': 'application/x-www-form-urlencoded' }}).success(function(response) {
      		console.log(response);
      		//location.href = location.protocol + '//' +location.host + location.pathname + response;
      		var urlpdf = location.protocol + '//' +location.host + location.pathname + response;
      		window.open(urlpdf);
  		});
    };

  }]);

})();