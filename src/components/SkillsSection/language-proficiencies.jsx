export default function LanguageProficiencies() {
    return (
        <div className="flex flex-col space-4 p-4">
            <div className="flex space-4">
                <ProficiencyBar level={"1/6"} />
                <ProficiencyBar level={"3"} />
                <ProficiencyBar level={"5/6"} />
                <ProficiencyBar level={"2/3"} />
            </div>
        </div> 
    );
}

function ProficiencyBar({level}) {
    return (
        <div className="w-48 h-3 bg-neutral-900 rounded-xl">
            <div className={"bg-green-500 w-" + level + " rounded-xl h-full"}></div>
        </div>
    );
}