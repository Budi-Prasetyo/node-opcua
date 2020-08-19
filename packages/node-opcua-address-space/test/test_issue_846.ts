import * as path from "path";
import { AddressSpace, generateAddressSpace, UAObject } from "..";
import { nodesets } from "node-opcua-nodesets";
import { UAVariable } from "../dist/src/ua_variable";

// tslint:disable-next-line:no-var-requires
const describe = require("node-opcua-leak-detector").describeWithLeakDetector;
describe("#846 Various Variable Value in nodeset2.xml", () => {
    let addressSpace: AddressSpace;
    let iotChannelSet: UAObject;
    before(async () => {
        addressSpace = AddressSpace.create();

        await generateAddressSpace(addressSpace, [
            nodesets.standard,
            path.join(__dirname, "../test_helpers/test_fixtures/issue_846.xml"),
        ]);

        iotChannelSet = addressSpace.findNode("ns=1;i=5003") as UAObject;
    });

    after(() => {
        addressSpace.dispose();
    });

    describe("to verify", () => {
        it("NestedStructNonVarTypeData3", () => {
            const v1 = iotChannelSet.getComponentByName("NestedStructNonVarTypeData3") as UAVariable;
            v1.readValue().value.toString().should.eql("Variant(Scalar<Null>, value: <null>)");
        });
        it("EnumArrayTypeData1", () => {
            const v1 = iotChannelSet.getComponentByName("EnumArrayTypeData1") as UAVariable;
            v1.readValue().value.toString().should.eql("Variant(Scalar<Null>, value: <null>)");
        });
        it("should read a NestedStructNonVarTypeData3", async () => {
            const v1 = iotChannelSet.getComponentByName("NestedStructNonVarTypeData3") as UAVariable;
            v1.readValue().value.toString().should.eql("Variant(Scalar<Null>, value: <null>)");
        });
        it("should read an array of StatusCode", async () => {
            const v1 = iotChannelSet.getComponentByName("StatusCodeArrayTypeData1") as UAVariable;
            v1.readValue().value.toString().should.eql("Variant(Scalar<Null>, value: <null>)");
        });
        it("should read a StatusCode", async () => {
            const v1 = iotChannelSet.getComponentByName("StatusCodeTypeData1") as UAVariable;
            v1.readValue().value.toString().should.eql("Variant(Scalar<Null>, value: <null>)");
        });
        it("should read an array of StructNonVarArrayTypeData1", async () => {
            const v1 = iotChannelSet.getComponentByName("StructNonVarTypeWithArrayElementData4") as UAVariable;
            v1.readValue().value.toString().should.eql("Variant(Scalar<Null>, value: <null>)");
        });
    });

    it("EnumTypeData1", () => {
        const v1 = iotChannelSet.getComponentByName("EnumTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<Int32>, value: 0)");
    });

    it("should read an array of Boolean", async () => {
        const v1 = iotChannelSet.getComponentByName("BoolArrayTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Array<Boolean>, l= 2, value=[true,true])");
    });
    it("should read a Boolean", async () => {
        const v1 = iotChannelSet.getComponentByName("BoolTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<Boolean>, value: true)");
    });
    it("should read a Byte", async () => {
        const v1 = iotChannelSet.getComponentByName("ByteTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<Byte>, value: 255)");
    });
    it("should read an array of Byte", async () => {
        const v1 = iotChannelSet.getComponentByName("ByteArrayTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Array<Byte>, l= 2, value=[255,255])");
    });
    it("should read ByteOptionSetArrayTypeData1", async () => {
        const v1 = iotChannelSet.getComponentByName("ByteOptionSetArrayTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Array<Byte>, l= 2, value=[255,255])");
    });
    it("should read ByteOptionSetTypeData1", async () => {
        const v1 = iotChannelSet.getComponentByName("ByteOptionSetTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<Byte>, value: 127)");
    });
    it("should read an array of Float", async () => {
        const v1 = iotChannelSet.getComponentByName("FloatArrayTypeData1") as UAVariable;
        v1.readValue()
            .value.toString()
            .should.eql("Variant(Array<Float>, l= 2, value=[88.87999725341797,99.98999786376953])");
    });
    it("should read a Float", async () => {
        const v1 = iotChannelSet.getComponentByName("FloatTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<Float>, value: 99.99)");
    });
    it("should read an array of Int16", async () => {
        const v1 = iotChannelSet.getComponentByName("Int16ArrayTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Array<Int16>, l= 2, value=[32767,32767])");
    });
    it("should read a Int16", async () => {
        const v1 = iotChannelSet.getComponentByName("Int16TypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<Int16>, value: 32767)");
    });
    it("should read an array of Int32", async () => {
        const v1 = iotChannelSet.getComponentByName("Int32ArrayTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Array<Int32>, l= 2, value=[2147483647,2147483647])");
    });
    it("should read a Int32", async () => {
        const v1 = iotChannelSet.getComponentByName("Int32TypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<Int32>, value: 2147483647)");
    });
    it("should read a StructVarTypeData1", async () => {
        const v1 = iotChannelSet.getComponentByName("StructVarTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<ExtensionObject>, value: <null>)");
    });
    it("should read a StructNonVarTypeData1", async () => {
        const v1 = iotChannelSet.getComponentByName("StructNonVarTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<ExtensionObject>, value: <null>)");
    });
    it("should read a StructNonVarTypeData2", async () => {
        const v1 = iotChannelSet.getComponentByName("StructNonVarTypeData2") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<ExtensionObject>, value: <null>)");
    });
    it("should read an array of UInt16", async () => {
        const v1 = iotChannelSet.getComponentByName("Uint16ArrayTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Array<UInt16>, l= 2, value=[65535,65535])");
    });
    it("should read a UInt16", async () => {
        const v1 = iotChannelSet.getComponentByName("Uint16TypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<UInt16>, value: 65535)");
    });
    it("Uint16OptionSetArrayTypeData1", async () => {
        const v1 = iotChannelSet.getComponentByName("Uint16OptionSetArrayTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Array<UInt16>, l= 2, value=[65535,65535])");
    });
    it("Uint16OptionSetTypeData1", async () => {
        const v1 = iotChannelSet.getComponentByName("Uint16OptionSetTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<UInt16>, value: 1)");
    });
    //
    it("should read an array of UInt32", async () => {
        const v1 = iotChannelSet.getComponentByName("Uint32ArrayTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Array<UInt32>, l= 2, value=[4294967295,4294967295])");
    });
    it("should read a UInt32", async () => {
        const v1 = iotChannelSet.getComponentByName("Uint32TypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<UInt32>, value: 4294967295)");
    });
    it("Uint32OptionSetArrayTypeData1", async () => {
        const v1 = iotChannelSet.getComponentByName("Uint32OptionSetArrayTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Array<UInt32>, l= 2, value=[4294967295,4294967295])");
    });
    it("Uint32OptionSetTypeData1", async () => {
        const v1 = iotChannelSet.getComponentByName("Uint32OptionSetTypeData1") as UAVariable;
        v1.readValue().value.toString().should.eql("Variant(Scalar<UInt32>, value: 1023)");
    });
});
