/** 
 * Name: Dallon Jarman
 * Student ID: dmj296
 * Class: CYB136
 * Assignment #: 1
 * Project Name: Bank of Gallon
 * Purpose: This purpose of this project is to create a 
 * bank using everything I've learned so far
*/

// header files
#include <iostream>
#include <string>
#include <vector>

using namespace std;

// Define all the classes

// Define class for a bank account
class BankAccount 
{
public:

    // Blank initalization for bank account
    BankAccount() {}

    // Initalized the variables for bank account
    BankAccount(string name1, double balance1) 
    {
        name = name1;
        balance = balance1;

    }

    // gets the name of the account holder
    string GetName() const 
    {
        return name;
    }

    // gets the balance of the account holder
    double GetBalance() const 
    {
        return balance;
    }

    // Gets the deposited amount from the user and add it to the balance
    void Deposit(double amount) 
    {
        if (amount > 0) {
            balance = balance + amount;
        }
        else
        {
            cout << "Unable to deposit a negative number." << "\n";
        }
        
    }

    // gets the withdraw amount from the user and removes it from the balance
    void Withdraw(double amount) 
    {
        if (amount < 0)
        {
            cout << "Unable to withdrawal a negative number." << "\n";
        }
        else if (balance - amount >= 0) 
        {
            balance = balance - amount;
        } 
        else 
        {
            cout << "Insufficient funds." << "\n";
        }
    }

// keeps the name and balance of user private
private:
    string name;
    double balance;
};

// Define class for a bank
class Bank 
{
public:

    // This is the bank. This declares the user 
    Bank()
    {
        numAccounts = 0;
    }

    // This is how users are added along with balance
    void AddAccount(string name, double balance) 
    {
        accounts.push_back(BankAccount(name, balance));
        ++numAccounts;
    }
    
    // Returns the total number of created accounts
    int getAccountNumber() const
    {
        return numAccounts;
    }

    // Returns the account the user wants to see
    BankAccount& GetAccount(int index)
    {
        return accounts[index];
    }

private:
    vector<BankAccount> accounts;
    int numAccounts;
};


// Declare all the functions needed for the program
void introduction()
{
    cout << "\n" << "Welcome to the Bank of Gallon" << "\n";
    cout << "====================================" << "\n\n";
    cout << "This program is made for my CYB136 class" << "\n\n";
    cout << "The purpose of this program is to create a mock bank but also create " << "\n" <<
                "possible exploits that may happen" << "\n\n";
    cout << "I hope you enjoy" << "\n\n";
    cout << "====================================" << "\n";
}

// main program
int main() 
{
    // declare classes
    Bank bank;

    // declare varibles for program
    string name;
    double balance;
    int userInput = 0;
    string input;

    // Call introduction function to create the intoduction
    introduction();

    // Adds more user based on if the user wants more than one person or not
    do 
    {
        // Ask user for their name
        cout << "\n" << "What is the account holders name?: ";
        cin >> ws;
        getline(cin, name);

        // Ask user for their deposit number
        cout <<  "How much would you like to deposit?: $";
        cin >> balance;

        if (cin.fail()) 
        {
            cout << "\n" << "That's not a number" << "\n";
            cout << "I'm sorry but I can not let you use this program" << "\n";
            cout << "Goodbye" << "\n\n";
            return 0;
        }

        // Add user to bank
        bank.AddAccount(name, balance);

        // Finds out if the user would like to input another bank user
                do 
                {
                    cout << "\n" << "Would you like to add another user? (y/n): ";
                    cin >> input;
                    if (input == "n" || input == "y" )
                    {
                        userInput = 1;
                    }
                    else
                    {
                        userInput = 0;
                        cout << "Make sure you enter a \"y\" for yes or \"n\" for no" << "\n";
                    }
                } while ( userInput == 0 );

        // If user inputs "n" then the program will stop creating bank accounts
        if (input == "n") 
        {
            userInput = 1;
        }
        else
        {
            userInput = 0;
        }

    } while ( userInput == 0);

    // Finds the total number of users
    int totalAccounts = bank.getAccountNumber();
    
    // Prints out the users in a really nice format so its easy to see
    for ( int i = 0; i < totalAccounts; i++ ) 
    {
        cout << "\n" << "Account #" << i + 1;
        cout << "\n" << bank.GetAccount(i).GetName();
        cout << "\n" << "$" << bank.GetAccount(i).GetBalance() << "\n";
    }

    // Asks the user what their next action will be
    int number;
    cout << "\n" << "List of all avaible actions" << "\n";
    cout << "1. Add money to an account" << "\n";
    cout << "2. Withdraw money from an account" << "\n";
    cout << "3. Add another user" << "\n";
    cout << "4. List all accounts" << "\n";
    cout << "5. End program" << "\n";
    cout << "Type number from above to continue: ";
    cin >> number;

    if (cin.fail()) 
       {
            cout << "\n" << "I am going to let you think about your mistake" << "\n";
            cout << "I am so tired of having to check everything" << "\n";
            cout << "All I asked for is a number" << "\n";
            cout << "End program..." << "\n";
            cout << "Unsuccessful :(" << "\n";
            return 0;
        }

    // Continue the program until user specifies they no longer want to use the bank
    while (number != 5)
    {
        // Allows the user to add number to their selected account
        if (number == 1) 
        {
            do
            {
                
                int accountNum;
                int deposit;

                // This is a safe guard to make sure user doesn't put in a number that doesn't exist
                do
                {
                    cout << "\n" << "Type the account number you would like to add money to: ";
                    cin >> accountNum;

                    // If the account number doesn't exit it will ask the user to input a different number
                    if ( accountNum > totalAccounts || accountNum < 1 )
                    {
                        cout << "I'm sorry but that account doesn't exit" << "\n";
                        cout << "Please type in the correct account number" << "\n";
                    }
                } while ( accountNum > totalAccounts || accountNum < 1 );

                cout << "\n" << "Balance for Account " << accountNum
                    << " is $" << bank.GetAccount(accountNum - 1).GetBalance() << "\n\n";
                cout << "How much money would you like to deposit?: $";
                cin >> deposit;
                bank.GetAccount(accountNum - 1).Deposit(deposit);
                cout << "Balance for Account " << accountNum
                    << " is $" << bank.GetAccount(accountNum - 1).GetBalance() << "\n";
                
                // Finds out if the user would like to input another bank user
                do 
                {
                    cout << "\n" << "Would you like to deposit money to another account? (y/n): ";
                    cin >> input;
                    if ( input == "n" || input == "y" )
                    {
                        userInput = 1;
                    }
                    else
                    {
                        userInput = 0;
                        cout << "Make sure you enter a \"y\" for yes or \"n\" for no" << "\n";
                    }
                    
                } while ( userInput == 0 );

                // If user inputs "n" then the program will stop creating bank accounts
                if (input == "n") 
                {
                    userInput = 1;
                }
                else
                {
                    userInput = 0;
                }

            } while ( userInput == 0 );

        }

        // Allows the user to withdrawl money from their account
        if (number == 2) 
        {
            do
            {
                int accountNum;
                int withdraw;

                // This is a safe guard to make sure user doesn't put in a number that doesn't exist
                do
                {
                    cout << "\n" << "Type the account number you would like to withdrawal money from: ";
                    cin >> accountNum;

                    // If the account number doesn't exit it will ask the user to input a different number
                    if ( accountNum > totalAccounts || accountNum < 1 )
                    {
                        cout << "I'm sorry but that account doesn't exit" << "\n";
                        cout << "Please type in the correct account number" << "\n";
                    }
                } while ( accountNum > totalAccounts || accountNum < 1 );

                cout << "Balance for Account " << accountNum
                    << " is $" << bank.GetAccount(accountNum - 1).GetBalance() << "\n";
                cout << "How much money would you like to withdraw?: $";
                cin >> withdraw;
                bank.GetAccount(accountNum - 1).Withdraw(withdraw);
                cout << "Balance for Account " << accountNum
                    << " is $" << bank.GetAccount(accountNum - 1).GetBalance() << "\n";

                // Finds out if the user would like to input another bank user
                do 
                {
                    cout << "\n" << "Would you like to withdrawal money from another account? (y/n): ";
                    cin >> input;
                    if (input == "n" || input == "y" )
                    {
                        userInput = 1;
                    }
                    else
                    {
                        userInput = 0;
                        cout << "Make sure you enter a \"y\" for yes or \"n\" for no" << "\n";
                    }
                    
                } while ( userInput == 0 );

                // If user inputs "n" then the program will stop creating bank accounts
                if (input == "n") 
                {
                    userInput = 1;
                }
                else
                {
                    userInput = 0;
                }
                
            } while ( userInput == 0 );
        }

        // Allows user to add another account
        if (number == 3) 
        {
        do 
            {
                // Ask user for their name
                cout << "\n" << "What is the account holders name?: ";
                cin >> ws;
                getline(cin, name);

                // Ask user for their deposit number
                cout <<  "How much would you like to deposit?: $";
                cin >> balance;

                if (cin.fail()) 
                {
                    cout << "\n" << "That's not a number" << "\n";
                    cout << "I'm sorry but I can not let you use this program" << "\n";
                    cout << "Goodbye" << "\n\n";
                    return 0;
                }

                // Add user to bank
                bank.AddAccount(name, balance);

                // Finds out if the user would like to input another bank user
                do 
                {
                    cout << "\n" << "Would you like to add another user? (y/n): ";
                    cin >> input;
                    if (input == "n" || input == "y" )
                    {
                        userInput = 1;
                    }
                    else
                    {
                        userInput = 0;
                        cout << "Make sure you enter a \"y\" for yes or \"n\" for no" << "\n";
                    }
                } while ( userInput == 0 );

                // If user inputs "n" then the program will stop creating bank accounts
                userInput = 0;
                if (input == "n") 
                {
                    userInput = 1;
                }

            } while ( userInput == 0);
        }

        // Allows user to add another account
        if (number == 4) 
        {
            // Prints out the users in a really nice format so its easy to see
            for ( int i = 0; i < totalAccounts; i++ ) 
            {
                cout << "\n" << "Account #" << i + 1;
                cout << "\n" << bank.GetAccount(i).GetName();
                cout << "\n" << "$" << bank.GetAccount(i).GetBalance() << "\n";
            }
        }

        // Asks user again for next action to prevent infinite loop
        cout << "\n" << "List of all avaible actions" << "\n";
        cout << "1. Add money to an account" << "\n";
        cout << "2. Withdraw money from an account" << "\n";
        cout << "3. Add another user" << "\n";
        cout << "4. List all accounts" << "\n";
        cout << "5. End program" << "\n";
        cout << "Type number from above to continue: ";
        cin >> number;
    }

    // This will print out the end program statement and end the program for you
    if (number == 5)
    {
        cout << "\n" << "Thank you for using Bank of Gallon" << "\n";
        cout << "Have a great rest of your day!";
        cout << "\n\nEnd Program\n";
        return 0;
    }

    // Fail safe is program manages to exit loop
    return 0;
}
