describe('http get request', function(){

    
    it('GET', function() {
        cy.request({
            methode : 'GET',
            url : 'http://httpbin.org/get',
        }).then(function(response){


            expect(response.body).have.property('url')
        })
    });
        

});

    
    it('POST', function() {
        cy.request({
            methode : 'POST',
            url : 'http://httpbin.org/post',
            body : {
                'name': 'Alireza',
                'age': '41'
            },
            Headers: {
                "content-type": "application/json"
            }
        }).then(function(response){


            expect(response.body).have.property('json')
        })
    });
        