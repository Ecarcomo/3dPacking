const {describe, expect, test} = require('@jest/globals');

const {executePythonScript}  = require('../src/utils/pythonExecutor');



describe('executePythonScript', () => {

  // Agregar más pruebas para otras funciones del controlador
   test('Debería devolver un JSON con la info de una baulera y una lista de items posicionados', async () => {
        
        const req_json = { "baulera": { "name":"baulera simple 3x3x3","width": 3.0, "height": 3.0, "depth": 3.0, "weightLimit": 10000},"items": [{"name": "sillon 2 cuerpos", "width": 3.0,"height": 0.8,"depth": 0.8,"weight": 40},{"name": "mesa de luz","width": 0.4,"height": 0.5,"depth": 0.4,"weight": 5}]};
        const req = JSON.stringify(req_json);

        const res_received_json = await executePythonScript("./src/utils/ejecutable.py", req);
        const res_received = JSON.stringify(JSON.parse(res_received_json));

        const res_expected_json = {"baulera": {"detail": "baulera simple 3x3x3(3.000x3.000x3.000, max_weight:10000.000) vol(27.000)"}, "fittedItems": [{"item": "mesa de luz(0.400x0.500x0.400, weight: 5.000) pos([0, 0, 0]) rt(0) vol(0.080)"}, {"item": "sillon 2 cuerpos(3.000x0.800x0.800, weight: 40.000) pos([Decimal('0.400'), 0, 0]) rt(1) vol(1.920)"}], "unfittedItems": []};
        const res_expected = JSON.stringify(res_expected_json);
        console.log("Recibido : "+res_received);
        console.log("Esperado : "+res_expected);
        expect(res_received).toBe(res_expected);

    });



});
