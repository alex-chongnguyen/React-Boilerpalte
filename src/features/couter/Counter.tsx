import { RootState, useAppDispatch, useAppSelector } from '@/stores';

import { decrement, increment } from './stores';

export function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className=" mx-auto w-32 text-center">
      <label
        htmlFor="custom-input-number"
        className="w-full text-sm font-semibold text-gray-700"
      >
        Counter Input
      </label>

      <div className="relative mt-1 flex h-10 w-full flex-row rounded-lg bg-transparent">
        <button
          data-action="decrement"
          className=" h-full w-20 cursor-pointer rounded-l bg-gray-300 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700"
          onClick={() => dispatch(decrement())}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>

        <span className="text-md md:text-basecursor-default flex items-center bg-gray-300 px-4 text-center font-semibold text-gray-700  outline-none outline-none hover:text-black focus:text-black  focus:outline-none">
          {count}
        </span>

        <button
          data-action="increment"
          className="h-full w-20 cursor-pointer rounded-r bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
          onClick={() => dispatch(increment())}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
