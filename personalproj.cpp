#include<iostream>
using namespace std;
void myFunc(double *a,int rows,int cols){
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            *(a+ i*rows + j)+=10.0;
        }
    }
}
void printArray(double *a,int rows,int cols){
    cout<<"Printing your array...\n";
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            cout<<*(a+ i*rows + j)<<"  ";
        }
    cout<<"\n";
    }
}
int main(){
    double a[2][2]={{1.5 , 2.5},{3.5 , 4.5}};
    myFunc(a[0],2,2);
    printArray(a[0],2,2);
    return 0;
}
