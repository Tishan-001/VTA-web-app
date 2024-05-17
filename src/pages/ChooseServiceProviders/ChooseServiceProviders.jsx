export default function ChooseServiceProviders() {
    return(
        <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="bg-white rounded-md shadow-bs2 p-8 w-96 h-100 space-y-6 ">
            <label class="text-3xl font-bold mb-6 flex justify-center" for="">Choose Your Service</label>
            <button class="block w-full rounded-md bg-blue-300 text-white py-4 px-6 text-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Transport Service
            </button>
            <button class="block w-full rounded-md bg-blue-300 text-white py-4 px-6 text-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Accommodation Service
            </button>
            <button class="block w-full rounded-md bg-blue-300 text-white py-4 px-6 text-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Tour Guide Service
            </button>
            <button class="block w-full rounded-md bg-blue-300 text-white py-4 px-6 text-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Medical Service
            </button>
        </div>
    </div>
    


    );
}