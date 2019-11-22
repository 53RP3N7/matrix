module.exports =

    {
        mutiplyMatrices: (a, b) =>

            {
                if (b.length == a[0].length)

                {
                    let result = [];

                    for (let i = 0; i < a.length; i++)

                    {

                        result[i] = [];

                        for (let j = 0; j < b[0].length; j++)

                        {

                            let sum = 0;

                            for (let k = 0; k < a[0].length; k++)

                            {

                                sum += a[i][k] * b[k][j];

                            }

                            result[i][j] = sum;

                        }

                    }

                    return result;

                } else return null;

                return null

            },

        print: (matrix) =>

            {

                for (let i = 0; i < matrix.length; i++)

                {

                    let row = '';

                    for (let j = 0; j < matrix[0].length; j++)

                    {

                        row += '' + matrix[i][j] + ' ';

                    }

                    console.log('[ ' + row + ' ]');

                }

                console.log('\n')

            }

    }