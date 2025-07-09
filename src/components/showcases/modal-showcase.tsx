import React from "react";
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Button, 
  Card, 
  CardBody, 
  CardHeader, 
  Divider,
  useDisclosure
} from "@heroui/react";
import { ShowcaseSection } from "./showcase-section";

export const ModalShowcase: React.FC = () => {
  const {isOpen: isBasicOpen, onOpen: onBasicOpen, onOpenChange: onBasicOpenChange} = useDisclosure();
  const {isOpen: isSizeOpen, onOpen: onSizeOpen, onOpenChange: onSizeOpenChange} = useDisclosure();
  const [selectedSize, setSelectedSize] = React.useState<"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full">("md");
  
  return (
    <ShowcaseSection title="Modals & Dialogs" description="Modals display content that requires user interaction.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Modal</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Button onPress={onBasicOpen}>Open Basic Modal</Button>
          <Modal isOpen={isBasicOpen} onOpenChange={onBasicOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                      risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                      quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                      adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Modal Sizes</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-3">
            {(["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"] as const).map((size) => (
              <Button 
                key={size} 
                variant="flat" 
                onPress={() => {
                  setSelectedSize(size);
                  onSizeOpen();
                }}
              >
                {size}
              </Button>
            ))}
          </div>
          
          <Modal isOpen={isSizeOpen} onOpenChange={onSizeOpenChange} size={selectedSize}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Modal Size: {selectedSize}</ModalHeader>
                  <ModalBody>
                    <p>
                      This modal has a size of <code>{selectedSize}</code>.
                    </p>
                    <p>
                      Modal sizes range from xs to 5xl, plus full for a full-screen modal.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};