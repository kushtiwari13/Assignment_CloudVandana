public class Array_Shuffe_Without_builtin_methods {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};

        ShufflingOfArray(array);

        System.out.println("A new Random Shuffled Array is:");
        for (int element : array) {
            System.out.print(element + " ");
        }
    }

    public static void ShufflingOfArray(int[] arr) {
        int n = arr.length;
        for (int i = n - 1; i > 0; i--) {
            int randomIndex = (int) (Math.random() * (i + 1));
            int temp = arr[i];
            arr[i] = arr[randomIndex];
            arr[randomIndex] = temp;

            //here first we are generating a random index
            //from 0 to i and than swapping the elements of
            //random index and i
        }
    }
}
