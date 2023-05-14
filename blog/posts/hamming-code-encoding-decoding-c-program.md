## Introduction

Hamming code is a linear error-correcting code developed by Richard Hamming in 1950. This code is widely used in communication systems to detect and correct transmission errors that occur during data transmission over a noisy channel. In this article, we will discuss a C program that simulates the process of encoding and decoding binary messages using Hamming code.

## The Program

This program simulates the process of sending, encoding, receiving, and decoding binary messages using Hamming code. It uses a generator matrix **G** and a parity-check matrix **H** to generate code words, check errors in the received message, and correct one error if it exists.

The program starts by defining the parameters for the Hamming code, such as the length of the code word (**N**), the number of base vectors (**K**), the number of rows in the parity-check matrix **H** (**I**), and the maximum number of errors (**E**). It then defines the generator matrix **G**, the parity-check matrix **H**, and the set of possible (valid) codewords **C**.

The main function of the program performs the following steps:

1. Calls the **input** function to get the message to be encoded from the user.
2. Calls the **encode** function to encode the message using the generator matrix **G**.
3. Calls the **output** function to display the encoded message.
4. Calls the **simulateNoise** function to simulate errors in the received message.
5. Calls the **output** function to display the received codeword after transmission.
6. Checks if the received codeword is a valid codeword by comparing it with the set of possible codewords.
7. If the received codeword is a valid codeword, calls the **decode** function to decode the message and display it.
8. If the received codeword is not a valid codeword, calculates the syndromes and the number of errors in the received message.
9. If the number of errors is greater than the maximum number of errors, displays an error message and exits.
10. If the number of errors is less than or equal to the maximum number of errors, finds the position and the value of the error.
11. Corrects the error and calls the **decode** function to decode the message and display it.

Here is the code of the program:

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define N 4 // length of the codeword
#define K 2 // number of base vectors
#define I (N-K) // number of rows in parity-check matrix H
#define E 1 // max number of errors

// generator matrix
int G[K][N] = {
    {1, 0, 1, 0},
    {0, 1, 0, 1}
};
// pairity-check matrix
int H[I][N] = { 
    {1, 0, 0, 1},
    {0, 1, 1, 0},
};
// set of possible codewords, |C| = q^k = 2^2 = 4
int C[4][N] = {
    {0, 0, 0, 0},
    {1, 0, 1, 0},
    {0, 1, 0, 1},
    {1, 1, 1, 1},
};

void input(int R[], int message[]) {    
    printf("\nEnter a %d-bit message (each separated by space): ", K);
    
    for (int i = 0; i < K; i++) {
        scanf("%d", &message[i]);
    }
}

void encode(int R[], int message[]) {
    for (int i = 0; i < N; i++) {
        R[i] = 0;
        for (int j = 0; j < K; j++) {
            R[i] ^= (message[j] * G[j][i]);
        }
    }
}

void output(int R[]) {
    for (int i = 0; i < N; i++) {
        printf("%d ", R[i]);
    }
    printf("\n");
}

void decode(int R[], int message[]) {
    printf("\nDecoded message: ");

    for (int i = 0; i < K; i++) {
        message[i] = R[i];
        printf("%d", message[i]);
    }

    printf("\n\n");
}

void simulateNoise(int R[]) {
    srand(time(NULL));
    for (int i = 0; i < E; i++) {
        int indeks = rand() % N; // bit that will flip
        R[indeks] ^= 1; // flipping the bit (0 to 1 or 1 to 0)
    }
}

int main() {
    int i, j, k, S[I];

    int message[K]; // message to encode
    int R[N]; // encoded message
    
    input(R, message);
    printf("Encoded message: ");
    encode(R, message);
    output(R);
    simulateNoise(R);
    printf("Received codeword after transmission: ");
    output(R);

    // check if the received codeword is a valid codeword
    int isValidWord = 0;
    for (i = 0; i < 4; i++) {
        int isValid = 1;
        for (j = 0; j < N; j++) {
            if (R[j] != C[i][j]) {
                isValid = 0;
                break;
            }
        }
        if (isValid) {
            isValidWord = 1;
            break;
        }
    }

    if (isValidWord) {
        printf("Received codeword doesn't have any errors.\n");

        decode(R, message);

        return 0;
    }

    // calculate syndromes
    for (i = 0; i < I; i++) {
        S[i] = 0;
        for (j = 0; j < N; j++) {
            S[i] ^= R[j] * H[i][j];
        }
        S[i] %= 2;
    }

    // find number of errors
    int errTotal = 0;
    for (i = 0; i < I; i++) {
        if (S[i] != 0) {
            errTotal++;
        }
    }

    // if there are more than E errors, correction is not possible
    if (errTotal > E) {
        printf("Multiple errors were made in received codeword, correction isn't possible\n");
        return 0;
    }

    // find the position and the value of an error
    int errPos = -1;
    int errVal = 0;
    for (i = 0; i < I; i++) {
        if (S[i] != 0) {
            errPos = i;
            for (j = 0; j < N; j++) {
                errVal ^= R[j] * H[i][j];
            }
        }
    }

    // correct an error if it exists
    if (errPos >= 0) {
        R[errPos] ^= errVal;
        printf("Error corrected at position %d\n", errPos);
    }

    // print corrected and decoded message
    printf("Received codeword has been corrected to a codeword: ");
    output(R);
    decode(R, message);

    return 0;
}
```

## Conclusion

Hamming code is a popular error-correcting code that is widely used in communication systems. In this article, I have presented a C program that simulates the process of encoding and decoding binary messages using Hamming code. The program uses a generator matrix **G** and a parity-check matrix **H** to generate code words, check errors in the received message, and correct one error if it exists. Overall, this program can serve as a useful tool for understanding the principles of Hamming code and its implementation in communication systems.
