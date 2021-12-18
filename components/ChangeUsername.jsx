import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { useMoralis } from "react-moralis";
import { PencilIcon } from "@heroicons/react/outline";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, user } = useMoralis();
  const [isOpen, setIsOpen] = useState(false);
  const usernameRef = useRef(null);

  const updateUsername = () => {
    const username = usernameRef.current.value;
    if (!username) return;
    setUserData({
      username: username,
    });
    setIsOpen(false);
  };

  return (
    <div className="text-sm absolute top-5 right-5 hover:text-pink-700">
      <div
        className="flex justify-center items-center space-x-1 py-2 px-4 border-2 rounded-full cursor-pointer
      bg-black bg-opacity-60 border-pink-500 shadow-md hover:shadow-fuchsia-600"
      >
        <PencilIcon className="w-4 h-4" />
        <button onClick={() => setIsOpen(true)}>Change Your Username</button>
      </div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overscroll-y-auto"
          onClose={setIsOpen}
        >
          <div
            className="flex items-end justify-center min-h-[800px] 
        sm:min-h-screen pt-4 px4 pb-20 text-center sm:block sm:p-0"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
            </Transition.Child>
            {/* This elm is to trick the browser into centring the modal contents :3 */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="inline-block align-bottom bg-black bg-opacity-50 rounded-lg
            px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform
            transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
              >
                <div>
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-white"
                      >
                        Update Your Username
                      </Dialog.Title>
                      <div className="mt-4">
                        <input
                          className="border-none focus:ring-0 w-full text-center outline-none rounded-lg py-1 mt-2"
                          type="text"
                          ref={usernameRef}
                          placeholder={`(current username : ${user.getUsername()})`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      disabled={isUserUpdating}
                      onClick={updateUsername}
                      type="button"
                      className="inline-flex justify-center w-full rounded-md 
                    border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium
                    text-white hover:bg-pink-700 focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-pink-500 sm:text-sm
                    disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default ChangeUsername;
