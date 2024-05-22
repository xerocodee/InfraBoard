'use client';

import Canvas from '@/components/canvas/canvas';
import Header from '@/components/header/header';
import SideBar from '@/components/sidebar/sidebar';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import CodeEditor from '@/components/code_editor/codeEditor';
import { useEffect, useState } from 'react';
import appwriteService from '@/appwrite/config';
import { useRouter } from 'next/navigation';
import { ClockLoader } from 'react-spinners';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [droppedItems, setDroppedItems] = useState([]);
  
  const handleItemDrop = (newItem) => {
    setDroppedItems((prevItems) => [...prevItems, newItem]);
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);
        const data = await appwriteService.isLoggedIn();
        if (!data) {
          router.replace('/login');
        } else {
          setLoading(false);
        }
      } catch (error) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <ClockLoader color="#36d7b7" loading={loading} height={72} width={62} />
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <SideBar />
      <Canvas onItemDrop={handleItemDrop} droppedItems={droppedItems} />
      <CodeEditor droppedItems={droppedItems} />
    </DndProvider>
  );
};

export default Home;
