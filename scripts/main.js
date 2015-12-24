var data = {
	hidrogeno: 'n=1 l=0 m=0 s=+1/2',
	helio: 'n=1 l=1 m=1 s=-1/2',
	litio: 'n=2 l=0 m=0 s=+1/2'
};

function getNumerosCuanticos(element) {
	console.log('getNumerosCuanticos', element);
	$('#results').html(data[element]);
}
