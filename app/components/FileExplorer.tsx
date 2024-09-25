'use client';

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FileSystemNode } from '../types/fileSystem';

Modal.setAppElement('#__next');



const FolderIcon = () => (
  <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" >
<path d="M0 1H6L9 4H16V14H0V1Z" fill="#000000"/>
</svg>
);

const HtmlIcon = () => (
  <svg width="16px" height="16px" viewBox="-1 0 20 20" version="1.1" >
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" id="html-[#124]">

</path>
            </g>
        </g>
    </g>
</svg>
);

const CssIcon = () => (
  <svg width="16px" height="16px" viewBox="0 0 20 20" version="1.1" >

  <g >
  
  <path d="M 3 0 L 3 20 L 17 20 L 17 19 L 16 19 L 4 19 L 4 1 L 12 1 L 12 4 L 12 5 L 16 5 L 16 12 L 17 12 L 17 5 L 17 4 L 13 0 L 12 0 L 3 0 z M 13 1.3535156 L 15.646484 4 L 13 4 L 13 1.3535156 z M 7 13 L 6.8164062 13.007812 L 6.6328125 13.033203 L 6.453125 13.076172 L 6.2773438 13.134766 L 6.1074219 13.208984 L 5.9472656 13.298828 L 5.7949219 13.404297 L 5.6523438 13.521484 L 5.5214844 13.652344 L 5.4042969 13.794922 L 5.3007812 13.947266 L 5.2089844 14.107422 L 5.1347656 14.277344 L 5.0761719 14.451172 L 5.0351562 14.632812 L 5.0078125 14.816406 L 5 15 L 5 16 L 5.0078125 16.183594 L 5.0351562 16.367188 L 5.0761719 16.546875 L 5.1347656 16.722656 L 5.2089844 16.890625 L 5.3007812 17.052734 L 5.4042969 17.205078 L 5.5214844 17.347656 L 5.6523438 17.478516 L 5.7949219 17.595703 L 5.9472656 17.699219 L 6.1074219 17.791016 L 6.2773438 17.865234 L 6.453125 17.923828 L 6.6328125 17.964844 L 6.8164062 17.992188 L 7 18 L 7.1835938 17.992188 L 7.3671875 17.964844 L 7.546875 17.923828 L 7.7226562 17.865234 L 7.8925781 17.791016 L 8.0527344 17.699219 L 8.2050781 17.595703 L 8.3476562 17.478516 L 8.4785156 17.347656 L 8.5957031 17.205078 L 8.6992188 17.052734 L 8.7890625 16.894531 L 7.8925781 16.445312 L 7.8652344 16.5 L 7.7929688 16.607422 L 7.7070312 16.707031 L 7.609375 16.792969 L 7.5 16.865234 L 7.3828125 16.923828 L 7.2597656 16.964844 L 7.1308594 16.992188 L 7 17 L 6.8691406 16.992188 L 6.7402344 16.964844 L 6.6171875 16.923828 L 6.5 16.865234 L 6.390625 16.792969 L 6.2929688 16.707031 L 6.2070312 16.607422 L 6.1347656 16.5 L 6.0761719 16.382812 L 6.0332031 16.257812 L 6.0078125 16.130859 L 6 16 L 6 15 L 6.0078125 14.869141 L 6.0332031 14.740234 L 6.0761719 14.617188 L 6.1347656 14.5 L 6.2070312 14.390625 L 6.2929688 14.292969 L 6.390625 14.207031 L 6.5 14.134766 L 6.6171875 14.076172 L 6.7402344 14.033203 L 6.8691406 14.007812 L 7 14 L 7.1308594 14.007812 L 7.2597656 14.033203 L 7.3828125 14.076172 L 7.5 14.134766 L 7.609375 14.207031 L 7.7070312 14.292969 L 7.7929688 14.390625 L 7.8652344 14.5 L 7.8925781 14.554688 L 8.7890625 14.105469 L 8.6992188 13.947266 L 8.5957031 13.794922 L 8.4785156 13.652344 L 8.3476562 13.521484 L 8.2050781 13.404297 L 8.0527344 13.298828 L 7.8925781 13.208984 L 7.7226562 13.134766 L 7.546875 13.076172 L 7.3671875 13.033203 L 7.1835938 13.007812 L 7 13 z M 11.5 13 C 10.671573 13 10 13.671573 10 14.5 C 10 15.328427 10.671573 16 11.5 16 L 12.5 16 C 12.776142 16 13 16.223858 13 16.5 C 13 16.776142 12.776142 17 12.5 17 L 10 17 L 10 18 L 12.5 18 C 13.328427 18 14 17.328427 14 16.5 C 14 15.671573 13.328427 15 12.5 15 L 11.5 15 C 11.223858 15 11 14.776142 11 14.5 C 11 14.223858 11.223858 14 11.5 14 L 14 14 L 14 13 L 11.5 13 z M 16.5 13 C 15.671573 13 15 13.671573 15 14.5 C 15 15.328427 15.671573 16 16.5 16 L 17.5 16 C 17.776142 16 18 16.223858 18 16.5 C 18 16.776142 17.776142 17 17.5 17 L 15 17 L 15 18 L 17.5 18 C 18.328427 18 19 17.328427 19 16.5 C 19 15.671573 18.328427 15 17.5 15 L 16.5 15 C 16.223858 15 16 14.776142 16 14.5 C 16 14.223858 16.223858 14 16.5 14 L 19 14 L 19 13 L 16.5 13 z " />
  
  </g>
  
  </svg>
);

const TxtIcon = () => (
  <svg width="16px" height="16px" viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" >
    <title>file-text</title><polygon className="cls-1" points="48.77 8.19 53.43 8.19 48.77 3.12 48.77 8.19"/><path className="cls-1" d="M45.63,9.76V.67H17.22a.6.6,0,0,0-.6.6V54.73a.6.6,0,0,0,.6.6H54.78a.6.6,0,0,0,.6-.6V11.33H47.2A1.57,1.57,0,0,1,45.63,9.76ZM48.8,39.89H22.15a1.18,1.18,0,0,1,0-2.36H48.8a1.18,1.18,0,1,1,0,2.36Zm0-7.78H22.15a1.18,1.18,0,0,1,0-2.35H48.8a1.18,1.18,0,1,1,0,2.35Zm0-7.64H22.15a1.18,1.18,0,0,1,0-2.35H48.8a1.18,1.18,0,1,1,0,2.35Z"/></svg>
);

const DefaultFileIcon = () => (
  <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none">
  <path d="M12 3V21M9 21H15M19 6V3H5V6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default function FileExplorer() {
  const [fileSystem, setFileSystem] = useState<FileSystemNode[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [isFolder, setIsFolder] = useState(true);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('fileSystem');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFileSystem(parsedData);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    if (fileSystem.length > 0) {
      localStorage.setItem('fileSystem', JSON.stringify(fileSystem));
    }
  }, [fileSystem]);

  const openAddNodeModal = (parentId: string | null, folder: boolean) => {
    setCurrentNodeId(parentId);
    setIsFolder(folder);
    setModalOpen(true);
    setName('');
  };

  const addNode = () => {
    const newNode: FileSystemNode = {
      id: Date.now().toString(),
      name: name,
      type: isFolder ? 'folder' : 'file',
      children: isFolder ? [] : undefined,
      isOpen: isFolder ? false : undefined,
    };
  
    const nodeExistsInParent = (nodes: FileSystemNode[], parentId: string): boolean => {
      for (const node of nodes) {
        if (node.id === parentId) {
          return node.children ? node.children.some(child => child.name === name) : false;
        }
        if (node.children) {
          const exists = nodeExistsInParent(node.children, parentId);
          if (exists) return true;
        }
      }
      return false;
    };
  
    if (currentNodeId !== null && nodeExistsInParent(fileSystem, currentNodeId)) {
      alert(`Name "${name}" is already exists in this folder bro`);
      return;
    }
  
    const addNodeRecursive = (nodes: FileSystemNode[]): FileSystemNode[] => {
      if (currentNodeId === null) {
        return [...nodes, newNode];
      }
  
      return nodes.map((node) => {
        if (node.id === currentNodeId && node.type === 'folder') {
          return {
            ...node,
            children: node.children ? [...node.children, newNode] : [newNode],
          };
        }
  
        return {
          ...node,
          children: node.children ? addNodeRecursive(node.children) : [],
        };
      });
    };
  
    setFileSystem(addNodeRecursive(fileSystem));
    setModalOpen(false);
  };

  const deleteNode = (nodeId: string) => {
    const deleteNodeRecursive = (nodes:any) => {
      return nodes
        .filter((node) => node.id !== nodeId) 
        .map((node) => ({
          ...node,
     
          children: node.children ? deleteNodeRecursive(node.children) : [],
        }));
    };

    setFileSystem(deleteNodeRecursive(fileSystem));
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'html':
        return <HtmlIcon />;
      case 'css':
        return <CssIcon />;
      case 'txt':
        return <TxtIcon />;
      default:
        return <DefaultFileIcon />;
    }
  };

  const toggleFolder = (nodeId: string) => {
    const toggleNodeRecursive = (nodes: FileSystemNode[]): FileSystemNode[] => {
      return nodes.map((node) => {
        if (node.id === nodeId && node.type === 'folder') {
          return {
            ...node,
            isOpen: !node.isOpen,
          };
        }

        return {
          ...node,
          children: node.children ? toggleNodeRecursive(node.children) : [],
        };
      });
    };

    setFileSystem(toggleNodeRecursive(fileSystem));
  };

  const renderFileSystem = (nodes: FileSystemNode[], level: number = 0) => {
    return (
      <div className=''>  <ul style={{ paddingLeft: `${level * 20}px` }}>
      {nodes.map((node) => (
        <li 
        className=' block mb-1 border-l-2 border-gray-600  whitespace-nowrap'
          key={node.id} 
          onMouseEnter={() => setHoveredNodeId(node.id)}
          onMouseLeave={() => setHoveredNodeId(null)}
     
        >
          <div 
          className=' flex items-center gap-4 justify-between p-2 w-[10%] whitespace-nowrap rounded-lg cursor-pointer'
           
            onClick={() => node.type === 'folder' && toggleFolder(node.id)}
          >
            <div className=' flex items-center py-2 px-6 rounded-xl  shadow-2xl gap-4  '  style={{ 
              backgroundColor: node.isOpen ? '#c2c2c2' : '#dcdcdc',
              
              
            }}  >
              {node.type === 'folder' ? <FolderIcon /> : getFileIcon(node.name)} 
              <span className=' ml-1' >{node.name}</span>
            </div>
            {hoveredNodeId === node.id && (
              <div className=' flex items-center gap-1' >
                {node.type === 'folder' && (
                  <>
                  
                   <button className=' py-1 px-1 hover:bg-inherit hover:scale-[1.2] transition-all' onClick={() => openAddNodeModal(node.id, false)} title="Add File" >
                    <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" ><path d="M5,22H19a1,1,0,0,0,1-1V6.414a1,1,0,0,0-.293-.707L16.293,2.293A1,1,0,0,0,15.586,2H5A1,1,0,0,0,4,3V21A1,1,0,0,0,5,22ZM9,11h2V9a1,1,0,0,1,2,0v2h2a1,1,0,0,1,0,2H13v2a1,1,0,0,1-2,0V13H9a1,1,0,0,1,0-2Z"/></svg>
                    </button>
                    <button className=' py-1 px-1 hover:bg-inherit hover:scale-[1.2] transition-all' onClick={() => openAddNodeModal(node.id, true)} title="Add Folder" >
                    <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" ><path d="M20,7H12.309a.5.5,0,0,1-.447-.276L10.276,3.553A1,1,0,0,0,9.382,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V8A1,1,0,0,0,20,7Zm-5,8H13v2a1,1,0,0,1-2,0V15H9a1,1,0,0,1,0-2h2V11a1,1,0,0,1,2,0v2h2a1,1,0,0,1,0,2Z"/></svg>
                    </button>
                   
                  </>
                )}
                <button className=' py-1 px-1 hover:bg-inherit hover:scale-[1.2] transition-all' onClick={(e) => { 
                  e.stopPropagation();
                  deleteNode(node.id);
                }}
                   title="Delete" >
                <svg width="24px" height="24px" viewBox="0 0 1024 1024" ><path fill="#000000" d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"/></svg>
                </button>
              </div>
            )}
          </div>
          {node.children && node.isOpen && renderFileSystem(node.children, level + 1)}
        </li>
      ))}
    </ul></div>
    
    );
  };

  return (
    <div>
      <button className=' py-3 px-6 rounded-xl bg-gray-300 hover:bg-gray-500' onClick={() => openAddNodeModal(null, true)} title="Add Root Folder">Add Root Folder</button>
      {renderFileSystem(fileSystem)}

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Add Node"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <div className=' flex flex-col gap-2'><p  className=' font-semibold flex justify-center' >{isFolder ? 'Add Folder' : 'Add File'}</p>
        <div className=' flex items-center gap-2'><input
        className=' py-3 px-6 rounded-xl border-[1px] border-gray-300'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button className=' py-2 px-5 bg-gray-400  rounded-lg text-white' onClick={addNode}>Add</button>
        <button className=' py-2 px-5 bg-gray-400  rounded-lg text-white' onClick={() => setModalOpen(false)}>Cancel</button></div></div>
        
        
      </Modal>
    </div>
  );
}