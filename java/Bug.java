class MyList<E> {
    private E[] arr;
    private int length;

    public MyList() {
        arr = (E[]) new Object[0];
        length = 0;
    }

    public void ensureCapacity(int minCapacity) {
        if (minCapacity > arr.length) {
            int new_capacity = Math.max(minCapacity, arr.length * 2);
            E[] new_arr = (E[]) new Object[new_capacity];
            System.arraycopy(arr, 0, new_arr, 0, length);
            arr = new_arr;
        }
    }

    public boolean add(E e) {
        ensureCapacity(length + 1);
        arr[length++] = e;
        return true;
    }

    public boolean addAll(MyList<? extends E> c) {
        ensureCapacity(length + c.length);
        for (int i = 0; i < c.length; i++) {
            arr[length++] = c.arr[i];
        }
        return true;
    }
}


public class Bug{
    public static void main(String... args) {
        MyList s = new MyList<Integer>();
        MyList t = new MyList<Integer>();
        t.add(43);
        s.add(44);
        s.addAll(t);
    }
}
